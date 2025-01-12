import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import api from '@services/apiService'
import ShowExerciseByType from '@src/hoc/ShowExerciseByType'
import { MOCK_ENABLED } from '@mock/config'
import getJSON from "@mock/getJSON";
import {IExercise} from "@models/IExercise";

export default function ExercisePage() {
    const location = useLocation()
    const [, , theme, exerciseNumber] = location.pathname.split('/')

    const { data, isFetching } = useQuery({
        queryKey: [`theme ${theme}`, `exercise number: ${exerciseNumber}`],
        queryFn: async () => {
            if (MOCK_ENABLED) {
                console.log('MOCK_ENABLED: ', MOCK_ENABLED)
                const articles = await getJSON<Array<IExercise<'omissions'>>>('exercises')
                return articles.find(e => e.id === Number(exerciseNumber))
            } else {
                return api.getExercise(theme, exerciseNumber)
            }
        },
    })

    if (!data?.data) {
        return null
    }
    if (isFetching) {
        return <div>is Fetching ...</div>
    }

    return <ShowExerciseByType {...data} />
}
