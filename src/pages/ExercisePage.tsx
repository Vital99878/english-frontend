import { useLocation } from 'react-router-dom'
import ShowExerciseByType from '@src/hoc/ShowExerciseByType'
import EXERCISES_MOCK from '@mock/response/exercises'

export default function ExercisePage() {
    const location = useLocation()
    const [, , , exerciseNumber] = location.pathname.split('/')

    const data = EXERCISES_MOCK.find((e) => e.id === Number(exerciseNumber))

    if (!data?.data) {
        return null
    }
    return <ShowExerciseByType {...data} />
}
