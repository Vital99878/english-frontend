import {
  useState,
  ChangeEvent,
  useRef,
  MutableRefObject,
  ComponentProps,
} from "react";
import useCalcWidthAndSpace from "@components/AutoCompleteInput/useCalcWidthAndSpace";
import clsx from "clsx";
import "./AutoCompleteInput.scss";

type Props = {
  options: string[];
  correctAnswerKeys: boolean[];
  isSolutionChecked: boolean;
  setIsSolutionToFalse: () => void;
  inputProps: ComponentProps<"input">;
  solutionData: {
    keyPlace: number;
    solution: MutableRefObject<Array<string>>;
  };
};

export default function AutoCompleteInput({
  isSolutionChecked,
  setIsSolutionToFalse,
  correctAnswerKeys,
  inputProps,
  solutionData: { solution, keyPlace },
}: Props) {
  const [inputValue, setInputValue] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const { space, width } = useCalcWidthAndSpace(inputRef, inputValue); // Начальная ширина

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    solution.current[keyPlace] = value;
    // setIsSolutionToFalse();
  };

  const isCorrect = isSolutionChecked && correctAnswerKeys[keyPlace];
  const isInCorrect = isSolutionChecked && !correctAnswerKeys[keyPlace];

  return (
    <>
      {space.hasSpaceBefore && <span> </span>}
      <input
        {...inputProps}
        ref={inputRef}
        style={{
          width: !inputValue ? "2rem" : width,
          paddingInline: "6px",
        }}
        type="text"
        value={inputValue}
        onChange={handleChange}
        className={clsx("inputOmission bg-transparent", {
          correct: isCorrect,
          incorrect: isInCorrect,
        })}
        placeholder="..."
        tabIndex={isInCorrect ? 2 : 1}
      />
      {space.hasSpaceAfter && <span> </span>}
    </>
  );
}
