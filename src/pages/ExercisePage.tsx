import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import api from '@services/apiService'
import ShowExerciseByType from "@src/hoc/ShowExerciseByType";

export default function ExercisePage() {
    const location = useLocation()
    const [, ,theme, exerciseNumber] = location.pathname.split('/')

    // console.log(location.pathname.split('/'))
    const { data, isFetching } = useQuery({
        queryKey: [`theme ${theme}`, `exercise number: ${exerciseNumber}`],
        queryFn: () => api.getExercise(theme, exerciseNumber),
    })

    if(!data?.data) {
        return null
    }
    if (isFetching) {
        return <div>is Fetching ...</div>
    }

    return <ShowExerciseByType  {...data} />
}
