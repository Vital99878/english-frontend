import { IExercise } from '@src/entities/Exercise'
import axios, {AxiosResponse} from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
})

const EmptyExercise: IExercise = { hint: '', id: 0, level: '', text: '', topic: '' }

class ApiService {
    async getExercise(id: string): Promise<AxiosResponse<IExercise>> {
        try {
            const res = (await axiosInstance.get<IExercise>(`/exercise/article/${id}`))
            console.log('res: ', res)
            return res
        } catch (e) {

            console.error(e)
            return EmptyExercise
        }
    }
}

const api = new ApiService()
export default api
