import { CoreData } from '@models/coreData'
import {type} from "node:os";

/**
 *  Упражения приходящий из БД
 */
export interface IExercise<Type extends ExerciseType> extends CoreData {
    title: string
    /**
     * Описание, как выполнять задание
     */
    task: string
    hint: string
    type: ExerciseType
    data: ExerciseData<Type>
}

/**
 * Упражнение.
 * Данные, которые используются для создания упражениея для вывода в UI.
 * Зависит от ExerciseMode
 */
type ExerciseData<TExerciseMode extends ExerciseType> = TExerciseMode extends 'omissions' ? string : string[]

/**
 * Способ выполнения упражнения
 */
type ExerciseType = 'omissions' | 'right-order' | 'right-order-dialog';

export type TExercise = IExercise<'omissions'> | IExercise<'right-order'>
