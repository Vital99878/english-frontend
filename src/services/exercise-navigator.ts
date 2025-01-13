import {IExerciseNavigator} from '@models/IExercise'

class ExerciseNavigator implements IExerciseNavigator {
    currentExercise: number
    firstExercise: number
    lastExercise: number

    constructor() {
        this.currentExercise = 1
        this.firstExercise = 1
        this.lastExercise = 3
    }

    updateCurrentExerciseNumber = () => {
        const [, , , exerciseNumber] = location.pathname.split('/')
        this.currentExercise = Number(exerciseNumber)
    }

    goToNext = () => {
        if (this.currentExercise === this.lastExercise) {
            throw new Error('Это уже последнее упражнение')
        }

        const currentUrlData = location.pathname.split('/')

        this.currentExercise += 1
        currentUrlData[currentUrlData.length - 1] = this.currentExercise.toString()
        window.history.pushState(null, '', currentUrlData.join('/'))
        window.dispatchEvent(new PopStateEvent('popstate'))
    }

    goToPrevious = () => {
        if (this.currentExercise === this.firstExercise) {
            throw new Error('Это уже первое упражнение')
        }
        const currentUrlData = location.pathname.split('/')
        this.currentExercise -= 1
        currentUrlData[currentUrlData.length - 1] = this.currentExercise.toString()
        window.history.pushState(null, '', currentUrlData.join('/'))
        window.dispatchEvent(new PopStateEvent('popstate'))
    }
}

const exerciseNavigator = new ExerciseNavigator()
export default exerciseNavigator
