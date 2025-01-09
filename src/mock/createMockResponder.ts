import { ResponsesConfig } from '@mock/setMock'
import {AxiosError} from "axios";

export default function createMockResponder<TData>(config: ResponsesConfig<TData>) {
    const { responses, errors, order } = config
    let counter = 0

    return () => {
        if (order[counter] === 'S' || !order[counter]) {
            const response = responses.length > 1 ? responses.shift() : responses[0]
            counter++
            return [200, response as TData] as [number, TData]
        } else {
            const error = errors.length > 1 ? errors.shift() : errors[0]
            counter++
            return [400, error] as [number, AxiosError]
        }
    }
}
