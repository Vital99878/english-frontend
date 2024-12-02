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
import { StyledInput } from "@components/shared/Input/Input";
import styled from "styled-components";

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

const Input = styled(StyledInput)({
  padding: 0,
  border: "none",
  borderBottom: '2px',
});

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
      <Input
        {...inputProps}
        ref={inputRef}
        style={{
          width: !inputValue ? "2rem" : width,
          fontFamily: "Poppins",
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
