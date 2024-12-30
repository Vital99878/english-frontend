import {Exercise} from "@models/exercise";
import OmissionExerciseExecution from "@features/OmissionExerciseExecution/index";

export default function ShowExerciseByType(exercise: Exercise<'omissions'>) {
    switch (exercise.type) {
        case "omissions":
            return <OmissionExerciseExecution exercise={exercise}/>
        case "right-order":
            break;
        case "right-order-dialog":
            break;
    }
}
