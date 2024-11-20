import {
  useState,
  ChangeEvent,
  useRef,
  useEffect,
  MutableRefObject,
} from 'react';
import clsx from 'clsx';
import './AutoCompleteInput.scss';

type Props = {
  options: string[];
  correctAnswerKeys: boolean[];
  isSolutionChecked: boolean;
  setIsSolutionToFalse: () => void;
  solutionData: {
    keyPlace: number;
    solution: MutableRefObject<Array<string>>;
  };
};

export default function AutoCompleteText({
  isSolutionChecked,
  setIsSolutionToFalse,
  correctAnswerKeys,
  solutionData: { solution, keyPlace },
}: Props) {
  const [inputValue, setInputValue] = useState<string>('');

  const inputRef = useRef(null);
  const [inputWidth, setInputWidth] = useState('12px'); // Начальная ширина

  useEffect(() => {
    // Создаем временный элемент для измерения ширины текста
    const span = document.createElement('span');
    document.body.appendChild(span);
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.style.whiteSpace = 'nowrap';
    span.style.font = getComputedStyle(inputRef.current!).font; // Получаем шрифт инпута
    span.textContent = inputValue || ' '; // Обозначим пробел для учета ширины

    // Устанавливаем ширину инпута
    setInputWidth(`${span.getBoundingClientRect().width || 12}px `); // Учитываем паддинг

    // Удаляем временный элемент
    document.body.removeChild(span);
  }, [inputValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsSolutionToFalse();
    const value = event.target.value;
    setInputValue(value);
    solution.current[keyPlace] = value;
  };

  return (
    <div className="relative inline">
      <span> </span>
      <input
        ref={inputRef}
        autoFocus={true}
        style={{ width: !inputValue ? '2rem' : inputWidth }}
        type="text"
        value={inputValue}
        onChange={handleChange}
        className={clsx(
          'inline border-0 border-b-2 border-blue-300 dark:text-gray-500 bg-none bg-transparent focus:outline-none',
          {
            'correct': isSolutionChecked && correctAnswerKeys[keyPlace],
            'incorrect':
              isSolutionChecked && !correctAnswerKeys[keyPlace],
          },
        )}
        placeholder="..."
      />
      <span> </span>
    </div>
  );
}

