const defaultAnnouncements = {
    onDragStart(id: string) {
        return `Picked up draggable item ${id}.`;
    },
    onDragOver(id: string, overId: string) {
        if (overId) {
            return `Draggable item ${id} was moved over droppable area ${overId}.`;
        }

        return `Draggable item ${id} is no longer over a droppable area.`;
    },
    onDragEnd(id: string, overId: string) {
        if (overId) {
            return `Draggable item was dropped over droppable area ${overId}`;
        }

        return `Draggable item ${id} was dropped.`;
    },
    onDragCancel(id: string) {
        return `Dragging was cancelled. Draggable item ${id} was dropped.`;
    },
}
