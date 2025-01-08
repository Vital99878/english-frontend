import { useEffect, RefObject, useState } from "react";
import siblingsValidator from "@services/SiblingsValidator";

export default function useCalcWidthAndSpace(
  inputRef: RefObject<HTMLInputElement>,
  inputValue: string,
) {
  const [width, setWidth] = useState("12px");
  // Начальная ширина
  const [space, setSpace] = useState({
    hasSpaceBefore: false,
    hasSpaceAfter: false,
  });

  useEffect(() => {
    // Создаем временный элемент для измерения ширины текста
    const span = document.createElement("span");
    document.body.appendChild(span);
    span.style.visibility = "hidden";
    span.style.position = "absolute";
    span.style.whiteSpace = "nowrap";
    span.style.font = getComputedStyle(inputRef.current!).font; // Получаем шрифт инпута
    span.textContent = inputValue || " "; // Обозначим пробел для учета ширины

    // Устанавливаем ширину инпута
    setWidth(`${span.getBoundingClientRect().width || 12}px`); // Учитываем паддинг

    // Удаляем временный элемент
    document.body.removeChild(span);
  }, [inputValue]);

  useEffect(() => {
    setSpace({
      hasSpaceBefore: siblingsValidator.validateBeforeTag(inputRef.current),
      hasSpaceAfter: siblingsValidator.validateNextTag(inputRef.current),
    });
  }, []);

  return { width, space };
}
