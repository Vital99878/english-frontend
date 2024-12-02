import { useRef, useState } from "react";
import { BehaviorSubject } from "rxjs";
import OmissionExerciseService from "@services/omissionExerciseService";
import AutoCompleteInput from "../../AutoCompleteInput/AutoCompleteInput";

export default function OmissionExerciseExecution(props: { exercise: string }) {
  const exercise = new OmissionExerciseService(props.exercise);
  const solution = useRef<Array<string>>([]);
  const counter$ = new BehaviorSubject(0);
  const [isSolutionChecked, setIsSolutionChecked] = useState(false);
  const [correctAnswerKeys, setCorrectAnswerKeys] = useState<Array<boolean>>(
    [],
  );

  function checkSolution(evt: SubmitEvent) {
    evt.preventDefault();
    // console.log("correct keys: ", exercise.keys);
    // console.log("solution: ", solution.current);
    if (exercise.keys.length !== solution.current.length) {
      console.log("Введите все ответы");
      // todo всплывашку
      return;
    }

    setCorrectAnswerKeys(exercise.checkAnswer(solution.current));
    setIsSolutionChecked(true);
  }

  return (
    <div className={"my-9 flex flex-col gap-5"}>
      <h1>Title</h1>
      <p>Description</p>
      <form onSubmit={checkSolution}>
        <div className={"exercise"}>
          {exercise.valueForUI.map((value, index) => {
            if (value === "[key]") {
              const Input = (
                <AutoCompleteInput
                  key={index}
                  options={exercise.keys}
                  correctAnswerKeys={correctAnswerKeys}
                  solutionData={{ keyPlace: counter$.getValue(), solution }}
                  isSolutionChecked={isSolutionChecked}
                  setIsSolutionToFalse={() => setIsSolutionChecked(false)}
                  inputProps={{ onSubmit: checkSolution }}
                />
              );

              counter$.next(counter$.getValue() + 1);
              return Input;
            } else {
              return <span key={index}>{value}</span>;
            }
          })}
        </div>
        <button
          className={"ml-auto mt-3.5 p-2 border:none bg-transparent"}
          onClick={() => checkSolution}
        >
          Проверить
        </button>
      </form>
    </div>
  );
}
