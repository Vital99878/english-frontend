import { useState, useMemo } from 'react'
import style from './RightOrderExerciseExecution.module.scss'
// prettier-ignore
import {
    DndContext,
    closestCenter,
    useSensors,
    useSensor,
    PointerSensor,
    KeyboardSensor,
    TouchSensor,
    DragEndEvent
} from '@dnd-kit/core'
// prettier-ignore
import {SortableContext, arrayMove, sortableKeyboardCoordinates, horizontalListSortingStrategy} from '@dnd-kit/sortable'
import { SortableItem } from '@features/RightOrderExerciseExecution/components/SortableItem'
import OrderExerciseService from '@services/orderExerciseService'

type Props = {
    exercise: string
}

export default function OrderExerciseExecution({ exercise }: Props) {
    const orderExercise = useMemo(() => new OrderExerciseService(exercise), [exercise])

    const [solution, setSolution] = useState(orderExercise.exercise)

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event

        if (active.id !== over?.id) {
            setSolution((items) => {
                const oldIndex = items.indexOf(active.id as string)
                const newIndex = items.indexOf(over?.id as string)

                return arrayMove(items, oldIndex, newIndex)
            })
        }
    }

    function checkSolution() {
        console.log(orderExercise.checkSolution(solution))
    }

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    )

    return (
        <div>
            <h1>Упражение номер 1</h1>
            <p>Составьте предложение</p>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={solution} strategy={horizontalListSortingStrategy}>
                    <p className={style.sentence}>
                        {solution.map((part) => (
                            <SortableItem key={part} part={part} capitalized={false}/>
                        ))}
                    </p>
                </SortableContext>
            </DndContext>
            <button tabIndex={2} className={'ml-auto mt-3.5 p-2 border:none bg-transparent'} onClick={checkSolution}>
                Проверить
            </button>
        </div>
    )
}
