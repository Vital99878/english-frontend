import { useState, ChangeEvent, useRef, MutableRefObject } from "react";
import useCalcWidthAndSpace from "@components/AutoCompleteInput/useCalcWidthAndSpace";
import clsx from "clsx";
import "./AutoCompleteInput.scss";

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

export default function AutoCompleteInput({
  isSolutionChecked,
  setIsSolutionToFalse,
  correctAnswerKeys,
  solutionData: { solution, keyPlace },
}: Props) {
  const [inputValue, setInputValue] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const { space, width } = useCalcWidthAndSpace(inputRef, inputValue); // Начальная ширина

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    solution.current[keyPlace] = value;
    setIsSolutionToFalse();
  };

  return (
    <>
      {space.hasSpaceBefore && <span> </span>}
      <input
        ref={inputRef}
        autoFocus={true}
        style={{
          width: !inputValue ? "2rem" : width,
          paddingInline: "6px",
        }}
        type="text"
        value={inputValue}
        onChange={handleChange}
        className={clsx("inputOmission bg-transparent", {
          correct: isSolutionChecked && correctAnswerKeys[keyPlace],
          incorrect: isSolutionChecked && !correctAnswerKeys[keyPlace],
        })}
        placeholder="..."
      />
      {space.hasSpaceAfter && <span> </span>}
    </>
  );
}
