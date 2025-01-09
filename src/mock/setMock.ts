import {mockAdapter} from "@mock/config";
import {AxiosError} from "axios";
import createMockResponder from "@mock/createMockResponder";


type EndpointConfig = {
    method: 'onGet' | 'onPost'
    endpoint: string
    enabled?: boolean
}

export type ResponsesConfig<TData> = {
    responses:  Array<TData>
    errors:  Array<AxiosError<'error data'>>
    order: Array<'S' | 'E'>
}


export function setMock<TResponse>(
    config: EndpointConfig,
    responsesConfig: ResponsesConfig<TResponse>
): void{

    const {method, endpoint, enabled} = config

    if(enabled) {
        mockAdapter[method](endpoint).reply(createMockResponder(responsesConfig))
    }
}
