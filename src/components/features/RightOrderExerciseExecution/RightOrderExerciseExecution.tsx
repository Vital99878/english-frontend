import { useState, useEffect } from "react";

import Layout from "@components/Layout/index";
import style from "./RightOrderExerciseExecution.module.scss";

import {
  DndContext,
  closestCenter,
  useSensors,
  useSensor,
  PointerSensor,
  KeyboardSensor,
  TouchSensor,
} from "@dnd-kit/core";

import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "@features/RightOrderExerciseExecution/components/SortableItem";

type Props = {
  parts: string[];
};

export default function RightOrderExerciseExecution({ parts }: Props) {

  const [items, setItems] = useState(parts);
  useEffect(() => {
    console.log("items: ", items);
  }, [items]);

  // @ts-ignore
  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  return (
    <Layout>
      <h1>Упражение номер 1</h1>
      <p>Составьте предложение</p>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={horizontalListSortingStrategy}>
          <ul className={style.list}>
            {items.map((id) => (
              <SortableItem key={id} id={id} />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </Layout>
  );
}
