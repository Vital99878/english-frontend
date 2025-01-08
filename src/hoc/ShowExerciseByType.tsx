import { TExercise, IExercise } from '@models/IExercise'
import OmissionExerciseExecution from '@features/OmissionExerciseExecution/index'
import OrderExerciseListExecution from "@features/OrderExerciseListExecution/index";

export default function ShowExerciseByType(exercise: TExercise) {
    switch (exercise.type) {
        case 'omissions':
            return <OmissionExerciseExecution exercise={exercise as IExercise<'omissions'>} />
        case 'right-order':
            return <OrderExerciseListExecution exercise={exercise as IExercise<'right-order'>} />

        case 'right-order-dialog':
            break
    }
}
