import { useLocation } from 'react-router-dom'
import ShowExerciseByType from '@src/hoc/ShowExerciseByType'
import EXERCISES_MOCK from '@mock/response/exercises'

export default function ExercisePage() {
    const location = useLocation()
    const [, , theme, exerciseNumber] = location.pathname.split('/')
    console.log(theme, exerciseNumber)

    const data = EXERCISES_MOCK.find((e) => e.id === Number(exerciseNumber))

    // console.log(location.pathname.split('/'))

    if (!data?.data) {
        return null
    }
    // if (isFetching) {
    //     return <div>is Fetching ...</div>
    // }

    return <ShowExerciseByType {...data} />
}
