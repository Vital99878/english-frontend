import {useRef, useState, useEffect, FormEvent} from 'react'
import {BehaviorSubject} from 'rxjs'
import OmissionExerciseService from '@services/omissionExerciseService'
import {IExercise} from '@models/IExercise'
import AutoCompleteInput from '../../AutoCompleteInput/AutoCompleteInput'
import IconButton from '@mui/material/IconButton'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import alertService from '@components/Layout/Messenger/alertService'
import ExerciseHint from '@components/shared/ExerciseHint/ExerciseHint'
import style from './OmissionExercise.module.scss'
import exerciseNavigator from '@services/exercise-navigator'

export default function OmissionExerciseExecution(props: { exercise: IExercise<'omissions'> }) {
    const exerciseService = new OmissionExerciseService(props.exercise.data)
    const solution = useRef<Array<string | undefined>>([])

    const counter$ = new BehaviorSubject(0)
    const [hintIsOpened, setHintIsOpened] = useState(false)
    const [isSolutionChecked, setIsSolutionChecked] = useState(false)
    const [correctAnswerKeys, setCorrectAnswerKeys] = useState<Array<boolean>>([])

    function findFirstEmptyInputAndSetFocus() {
        const emptyInput = document.querySelector<HTMLInputElement>('input[value=""], input:not([value])')
        if (emptyInput) {
            emptyInput.focus()
        }
    }

    function checkSolution(evt: FormEvent) {
        evt.preventDefault()

        if (exerciseService.keys.length !== solution.current.length || solution.current.includes(undefined)) {
            alertService.showMessage({
                msg: 'Введите все ответы',
                severity: 'warning',
            })

            return findFirstEmptyInputAndSetFocus()
        } else {
            const correctAnswerMap = exerciseService.checkAnswer(solution.current as Array<string>)
            setCorrectAnswerKeys(correctAnswerMap)
            setIsSolutionChecked(true)

            if (!correctAnswerMap.includes(false)) {
                alertService.showMessage({
                    msg: 'Упраженение выполнено успешно',
                    severity: 'success',
                })
            } else {
                alertService.showMessage({
                    msg: 'Упраженение выполнено c ошибками',
                    severity: 'warning',
                })
                const input = document.querySelector<HTMLInputElement>('.isInCorrect')
                if (input) {
                    input.focus()
                    input.select()
                }
            }
        }
    }

    useEffect(() => {
        exerciseNavigator.updateCurrentExerciseNumber()
        findFirstEmptyInputAndSetFocus()
    }, [])

    return (
        <div className={'my-9 flex flex-col gap-5 relative max-w-3xl '}>
            <h1
                className={'text-2xl'}
            >{`${props.exercise.theme.toUpperCase()}. Упражнение N ${exerciseNavigator.currentExercise}`}</h1>
            <p>{props.exercise.task}</p>
            <form onSubmit={checkSolution}>
                <p className={'exercise text-n-6 xs:text-2xl sm:text-xl'}>
                    {exerciseService.valueForUI.map((value, index) => {
                        if (value === '[key]') {
                            const Input = (
                                <AutoCompleteInput
                                    key={index}
                                    options={exerciseService.keys}
                                    correctAnswerKeys={correctAnswerKeys}
                                    solutionData={{ keyPlace: counter$.getValue(), solution }}
                                    isSolutionChecked={isSolutionChecked}
                                    setIsSolutionToFalse={() => setIsSolutionChecked(false)}
                                    inputProps={{ onSubmit: checkSolution }}
                                />
                            )

                            counter$.next(counter$.getValue() + 1)
                            return Input
                        } else {
                            return <span key={index}>{value}</span>
                        }
                    })}
                </p>
                <button
                    tabIndex={2}
                    className={'ml-auto mt-3.5 p-2 border:none bg-transparent text-n-6 w-full'}
                    onClick={() => checkSolution}
                >
                    Проверить
                </button>
            </form>
            <div className={'navigation flex justify-between'}>
                <button
                    className={'text-xs text-n-6'}
                    onClick={exerciseNavigator.goToPrevious}
                    disabled={exerciseNavigator.currentExercise === exerciseNavigator.firstExercise}
                >
                    Предыдущее
                </button>
                <button
                    className={'text-xs text-n-6'}
                    onClick={exerciseNavigator.goToNext}
                    disabled={exerciseNavigator.currentExercise === exerciseNavigator.lastExercise}
                >
                    Следующее
                </button>
            </div>
            <ExerciseHint text={props.exercise.hint} open={hintIsOpened} handleClose={() => setHintIsOpened(false)} />
            <IconButton onClick={() => setHintIsOpened((s) => !s)} className={style.openHintButton}>
                <InfoOutlinedIcon style={ {borderRadius: '8px', fontSize: '1.6rem' }} />
            </IconButton>
        </div>
    )
}
