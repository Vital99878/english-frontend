import { useRef, useState } from "react";
import { BehaviorSubject } from "rxjs";
import OmissionExerciseService from "@services/omissionExerciseService";
import AutoCompleteInput from "../../AutoCompleteInput";

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
    <form className="exercise my-4" onSubmit={checkSolution}>
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
            />
          );

          counter$.next(counter$.getValue() + 1);
          return Input;
        } else {
          return <span key={index}>{value}</span>;
        }
      })}
      <button className={"absolute right-8 bottom-96"} onClick={checkSolution}>
        Проверить
      </button>
    </form>
  );
}
