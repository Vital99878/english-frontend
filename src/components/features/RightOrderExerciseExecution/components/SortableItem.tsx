import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

export function SortableItem(props: { part: string; capitalized: boolean }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.part })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    return (
        <span
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={`rounded hover:bg-n-9 ${props.capitalized && 'capitalize'}`}
        >
            {props.part}
        </span>
    )
}
