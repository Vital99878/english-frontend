import { OrderExercise } from '@models/orderExercise'

export default class OrderExerciseService implements OrderExercise {
    keys: string[] = []
    solution: string[] = []
    endSign = '.'

    constructor(exercise: string) {
        this.endSign = exercise[exercise.length - 1] // todo Проверка при создании и сохранение в бд, что Знак заверешения
        this.createKeys(exercise)
    }

    public checkSolution(answers: string[]): boolean {
        return answers.toString() === this.keys.toString()
    }

    private createKeys(exercise: string): void {
        const regex = /\[([^\]]+)]/g
        let match
        while ((match = regex.exec(exercise)) !== null) {
            this.keys.push(match[1])
        }
    }

    /**
     * Возвращает куски предложения в хаотичном порядке
     */
    get exercise(): string[] {
        // todo array в результате не должен быть равен this.keys
        const array: string[] = [...this.keys]
        for (let i = array.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1))

            ;[array[i], array[randomIndex]] = [array[randomIndex], array[i]]
        }

        return array
    }
}
