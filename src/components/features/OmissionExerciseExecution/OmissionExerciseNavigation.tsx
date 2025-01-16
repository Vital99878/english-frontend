import { useEffect } from 'react'
import exerciseNavigator from '@services/exercise-navigator'

export default function OmissionExerciseNavigation() {
    function findFirstEmptyInputAndSetFocus() {
        const emptyInput = document.querySelector<HTMLInputElement>('input[value=""], input:not([value])')
        if (emptyInput) {
            emptyInput.focus()
        }
    }

    useEffect(() => {
        exerciseNavigator.updateCurrentExerciseNumber()
        findFirstEmptyInputAndSetFocus()
    }, [])

    return (
        <div className={'navigation flex justify-between'}>
            <button
                className={'text-xs text-n-6'}
                onClick={exerciseNavigator.goToPrevious}
                disabled={exerciseNavigator.currentExercise === exerciseNavigator.firstExercise}
            >
                Предыдущее
            </button>
            <button
                className={'text-xs text-n-6'}
                onClick={exerciseNavigator.goToNext}
                disabled={exerciseNavigator.currentExercise === exerciseNavigator.lastExercise}
            >
                Следующее
            </button>
        </div>
    )
}
