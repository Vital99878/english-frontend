import { useLocation } from 'react-router-dom'
import ShowExerciseByType from '@src/hoc/ShowExerciseByType'
import getJSON from '@mock/getJSON'
import { IExercise } from '@models/IExercise'
import { useState, useEffect } from 'react'

export default function ExercisePage() {
    const location = useLocation()
    const [, , exerciseNumber] = location.pathname.split('/')

    const [mockExercise, setMockExercise] = useState<IExercise<'omissions'> | null | undefined>(null)

    // const { data, isFetching } = useQuery({
    //     queryKey: [`theme ${theme}`, `exercise number: ${exerciseNumber}`],
    //     queryFn: async () => {
    //         if (MOCK_ENABLED) {
    //             console.log('MOCK_ENABLED: ', MOCK_ENABLED)
    //             const articles = await getJSON<Array<IExercise<'omissions'>>>('exercises')
    //             return articles.find((e) => e.id === Number(exerciseNumber))
    //         } else {
    //             return api.getExercise(theme, exerciseNumber)
    //         }
    //     },
    // })

    useEffect(() => {
        async function getMockExercise() {
            const articles = await getJSON<Array<IExercise<'omissions'>>>('exercises')
            setMockExercise(articles.find((e) => e.id === Number(exerciseNumber)))
        }
        getMockExercise().then(console.log)
    }, [exerciseNumber])

    if (!mockExercise) {
        return <div>is Fetching ...</div>
    }

    return <ShowExerciseByType {...mockExercise} />
}
