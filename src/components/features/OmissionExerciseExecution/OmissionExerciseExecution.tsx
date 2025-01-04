import { useRef, useState } from 'react'
import { BehaviorSubject } from 'rxjs'
import OmissionExerciseService from '@services/omissionExerciseService'
import { IExercise } from '@models/IExercise'
import AutoCompleteInput from '../../AutoCompleteInput/AutoCompleteInput'
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import alertService from '@components/Layout/Messenger/alertService'
import ExerciseHint from '@components/shared/ExerciseHint/ExerciseHint'
import style from './OmissionExercise.module.scss'

export default function OmissionExerciseExecution(props: { exercise: IExercise<'omissions'> }) {
    const exerciseService = new OmissionExerciseService(props.exercise.data)
    const solution = useRef<Array<string>>([])

    const counter$ = new BehaviorSubject(0)
    const [hintIsOpened, setHintIsOpened] = useState(false)
    const [isSolutionChecked, setIsSolutionChecked] = useState(false)
    const [correctAnswerKeys, setCorrectAnswerKeys] = useState<Array<boolean>>([])

    function checkSolution(evt: SubmitEvent) {
        evt.preventDefault()

        if (exerciseService.keys.length !== solution.current.length) {
            alertService.showMessage({
                msg: 'Введите все ответы',
                severity: 'warning',
            })
            return
        }

        setCorrectAnswerKeys(exerciseService.checkAnswer(solution.current))
        setIsSolutionChecked(true)
        const input = document.querySelector<HTMLInputElement>('.isInCorrect')
        if (input) {
            input.focus()
            input.select()
        }
    }

    return (
        <div className={'my-9 flex flex-col gap-5 relative'} style={{ maxWidth: '80ch' }}>
            <h1>Title</h1>
            <p>Description</p>
            <form onSubmit={checkSolution}>
                <p className={'exercise text-n-6'}>
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
                                    inputProps={{ onSubmit: checkSolution, autoFocus: true }}
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
            <ExerciseHint text={props.exercise.hint} open={hintIsOpened} handleClose={() => setHintIsOpened(false)} />
            <IconButton onClick={() => setHintIsOpened((s) => !s)} className={style.openHintButton}>
                <InfoOutlinedIcon style={{backgroundColor: 'lightblue', borderRadius: '8px'}}/>
            </IconButton>
        </div>
    )
}
