import axios from 'axios'
import { IExercise } from '@models/IExercise'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
})

const EmptyExercise: IExercise<'omissions'> = {
    title: '',
    task: '',
    hint: '',
    type: 'omissions',
    data: '',
    id: 0,
    theme: 'article',
    level: 'a1',
}

class ApiService {
    async getExercise(id: string): Promise<IExercise<'omissions'>> {
        try {
            const res = await axiosInstance.get<IExercise<'omissions'>>(`/exercise/article/${id}`)
            return res.data
        } catch (e) {
            console.error(e)
            return EmptyExercise
        }
    }
}

const api = new ApiService()
export default api
