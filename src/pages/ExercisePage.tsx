import { useLocation } from 'react-router-dom'
import ShowExerciseByType from '@src/hoc/ShowExerciseByType'
import getJSON from '@mock/getJSON'
import { IExercise } from '@models/IExercise'
import { useState, useEffect } from 'react'

export default function ExercisePage() {
    const location = useLocation()
    const [, , theme, exerciseNumber] = location.pathname.split('/')

    const [mockExercise, setMockExercise] = useState<IExercise<'omissions'> | null | undefined>(null)

    useEffect(() => {
        async function getMockExercise() {
            const articles = await getJSON<Array<IExercise<'omissions'>>>('exercises')
            console.log(theme, exerciseNumber)
            return articles.find((e) => e.id === Number(exerciseNumber))
        }
        getMockExercise().then(setMockExercise)
    }, [exerciseNumber, theme])

    if (!mockExercise) {
        return <div>is Fetching ...</div>
    }

    return <ShowExerciseByType {...mockExercise} />
}
