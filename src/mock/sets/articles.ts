import { setMock } from '@mock/setMock'
import getJSON from '@mock/getJSON'
import { IExercise } from '@models/IExercise'

export default async function articles() {
    const [ARTICLE_1, ARTICLE_2] = await getJSON<Array<IExercise<'omissions'>>>('exercises')
    setMock(
        { enabled: true, endpoint: '/exercise/article/1', method: 'onGet' },
        { order: ['S'], errors: [], responses: [ARTICLE_1] }
    )
    setMock(
        { enabled: true, endpoint: '/exercise/article/2', method: 'onGet' },
        { order: ['S'], errors: [], responses: [ARTICLE_2] }
    )
}
