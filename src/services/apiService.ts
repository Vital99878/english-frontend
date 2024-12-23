import { IExercise } from '@src/entities/Exercise'
import axios from 'axios'



const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        "Content-Type": 'application/json'
    }
})

const EmptyExercise: IExercise = { hint: '', id: 0, level: '', text: '', topic: '' }

class ApiService {
    async getExercise(id: string): Promise<IExercise> {
        try {
            return (await axiosInstance.get(`/exercise/article/${id}`)) as IExercise
        } catch (e) {
            console.error(e)
            return EmptyExercise
        }
    }
}

const api = new ApiService()
export default api
