import axios from 'axios'
import { Exercise } from '@models/exercise'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
})

const EmptyExercise: Exercise<'omissions'> = {
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
    async getExercise(id: string): Promise<Exercise<'omissions'>> {
        try {
            const res = await axiosInstance.get<Exercise<'omissions'>>(`/exercise/article/${id}`)
            console.log('res: ', res)
            return res.data
        } catch (e) {
            console.error(e)
            return EmptyExercise
        }
    }
}

const api = new ApiService()
export default api
