import { useState, useMemo } from 'react'
import Layout from '@components/Layout/index'
import style from './OrderExerciseListExecution.module.scss'
// prettier-ignore
import {
    DndContext,
    closestCenter,
    useSensors,
    useSensor,
    PointerSensor,
    KeyboardSensor,
    TouchSensor
} from '@dnd-kit/core'
// prettier-ignore
import {SortableContext, arrayMove, sortableKeyboardCoordinates, horizontalListSortingStrategy} from '@dnd-kit/sortable'
import { SortableItem } from '@features/RightOrderExerciseExecution/components/SortableItem'
import OrderExerciseService from '@services/orderExerciseService'
import { IExercise } from '@models/IExercise'

export default function OrderExerciseListExecution({ exercise }: { exercise: IExercise<'right-order'> }) {
    const exerciseServiceList: OrderExerciseService[] = useMemo(() => {
        return exercise.data.reduce((acc, ex, currentIndex) => {
            acc[currentIndex] = new OrderExerciseService(ex)
            return acc
        }, [] as OrderExerciseService[])
    }, [exercise])

    const [checkedSolution, setCheckedSolution] = useState<Array<boolean> | null>(null)

    const [solutionMap, setSolutionMap] = useState<Array<string>[]>(() => {
        return exercise.data.reduce((acc, _ex, currentIndex) => {
            acc[currentIndex] = exerciseServiceList[currentIndex].exercise
            return acc
        }, [] as string[][])
    })

    const [endSignMap] = useState<Array<string>>(() => {
        return exercise.data.reduce((acc, _ex, currentIndex) => {
            acc[currentIndex] = exerciseServiceList[currentIndex].endSign
            return acc
        }, [] as string[])
    })

    function createHandlerDragEnd(index: number) {
        return function (event) {
            const { active, over } = event

            if (active.id !== over?.id) {
                setSolutionMap((items) => {
                    const solution = items[index]
                    const oldIndex = items[index].indexOf(active.id)
                    const newIndex = items[index].indexOf(over.id)
                    items[index] = arrayMove(solution, oldIndex, newIndex)
                    return [...items]
                })
            }
        }
    }

    function checkSolution(solutionMap: string[][]): boolean[] {
        return solutionMap.reduce((acc, solutionArray, currentIndex) => {
            acc[currentIndex] = exerciseServiceList[currentIndex].checkSolution(solutionArray)
            return acc
        }, [] as boolean[])
    }

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    )

    return (
        <Layout>
            <h1 className={'text-2xl text-n-6 my-9'}>Упражение номер Exercise List Execution</h1>
            <p className={'mb-5 text-n-6'}>Составьте предложиения в правильном порядке</p>
            {solutionMap.map((s, index) => {
                return (
                    <>
                        <DndContext
                            sensors={sensors}
                            collisionDetection={closestCenter}
                            onDragEnd={createHandlerDragEnd(index)}
                        >
                            <SortableContext items={s} strategy={horizontalListSortingStrategy}>
                                <p
                                    className={`${style.sentence} ${!checkedSolution ? '' : checkedSolution[index] ? style.correct : style.incorrect} mb-2 text-n-6`}
                                >
                                    <span>{`${index + 1}) `}</span>
                                    {s.map((part, currentIndex) => (
                                        <SortableItem key={part} part={part} capitalized={currentIndex === 0} />
                                    ))}
                                    <span>{endSignMap[index]}</span>
                                </p>
                            </SortableContext>
                        </DndContext>
                    </>
                )
            })}

            <button
                tabIndex={2}
                className={'ml-auto mt-3.5 p-2 border:none bg-transparent'}
                onClick={() => setCheckedSolution(checkSolution(solutionMap))}
            >
                Проверить
            </button>
        </Layout>
    )
}
