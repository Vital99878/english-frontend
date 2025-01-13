import axios, { AxiosInstance } from 'axios'
import { IExercise } from '@models/IExercise'
import { mockAPI } from '@mock/config'

const axiosInstance = axios.create({
    // todo set base url in the .env
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

type APIConfig = {
    axios: AxiosInstance
    mockAPI: AxiosInstance
    useMock: boolean
}

class ApiService {
    private axios: AxiosInstance

    constructor({ axios, mockAPI, useMock }: APIConfig) {
        if (useMock) {
            this.axios = mockAPI
        } else {
            this.axios = axios
        }
    }
    async getExercise(theme: string, id: string): Promise<IExercise<'omissions'>> {
        try {
            const res = await this.axios.get<IExercise<'omissions'>>(`/exercise/${theme}/${id}`)
            return res.data
        } catch (e) {
            console.error(e)
            return EmptyExercise
        }
    }
}

const api = new ApiService({ axios: axiosInstance, mockAPI: mockAPI, useMock: true })
export default api
