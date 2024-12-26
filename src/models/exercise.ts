import { CoreData } from '@models/coreData'

/**
 *  Упражения приходящий из БД
 */
export interface Exercise<Type extends ExerciseType> extends CoreData {
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
type ExerciseType = 'omissions' | 'right-order' | 'right-order-dialog'
