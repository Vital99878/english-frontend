import Exercise from '../../services/omissionExercise';
import { useRef, useState } from 'react';
import { BehaviorSubject } from 'rxjs';
import AutoCompleteInput from '../AutoCompleteInput';

type Props = {
  exercise: string;
};

export default function OmissionExercise(props: Props) {
  const exercise = new Exercise(props.exercise);
  const solution = useRef<Array<string>>([]);
  const counter$ = new BehaviorSubject(0);
  const [isSolutionChecked, setIsSolutionChecked] = useState(false);
  const [correctAnswerKeys, setCorrectAnswerKeys] = useState<Array<boolean>>([]);

  function checkSolution() {
    console.log('correct keys: ', exercise.keys)
    if(exercise.keys.length !== solution.current.length) {
      console.log('Введите все ответы')
      // todo всплывашку
      return
    }

    setCorrectAnswerKeys(exercise.checkAnswer(solution.current));
    setIsSolutionChecked(true);
  }

  return (
    <div className="exercise my-4">
      {exercise.valueForUI.map((value, index) => {
        if (value === '[key]') {
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
      <button className={'absolute right-8 bottom-96'} onClick={checkSolution}>
        {' '}
        checkSolution
      </button>
    </div>
  );
}
