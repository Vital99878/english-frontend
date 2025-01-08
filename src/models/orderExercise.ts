export interface OrderExercise {
    keys: string[]
    solution: string[]
    checkSolution: (answers: string[]) => boolean
    exercise: string[]
    endSign: string
}
