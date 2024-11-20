import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop, DropTargetMonitor } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  CARD: 'card',
};
type Props = {
  parts: string[];
};

function ListComponent({ parts }: Props) {
  const [items, setItems] = useState(parts);

  useEffect(() => {
    console.log('items: ', items)
  }, [items]);

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const draggedItem = items[dragIndex];
    const updatedItems = [...items];
    updatedItems.splice(dragIndex, 1);
    updatedItems.splice(hoverIndex, 0, draggedItem);
    setItems(updatedItems);
  };

  const Item: React.FC<{ index: number }> = ({ index }) => {
    const [, drop] = useDrop({
      accept: ItemTypes.CARD,
      hover: (item: any, monitor: DropTargetMonitor) => {
        if (!item) {
          return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        moveItem(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
    });

    const [{ isDragging }, drag] = useDrag({
      type: ItemTypes.CARD,
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const opacity = isDragging ? 0.5 : 1;

    return (
      <div
        key={index}
        ref={(node) => drag(drop(node))}
        className={'cursor-pointer border-2 px-2 hover:bg-yellow-100'}
        style={{ display: 'inline', opacity }}
      >
        {items[index]}
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {items.map((item, index) => (
          <>
            <Item key={index} index={index} />
            {index < items.length -1 ? ' ' : null}
          </>
        ))}
      </div>
    </DndProvider>
  );
}

export default ListComponent;
