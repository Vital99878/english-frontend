import axios from "axios";
import * as MockAdapter from "axios-mock-adapter";


const MOCK_ENABLED = false


export const mockAPI =  axios.create({
    baseURL: '/',
})

export const mockAdapter = new MockAdapter(mockAPI, {
    delayResponse: 1000,
    onNoMatch: 'passthrough'
})

mockAdapter.onGet()


function setMock() {}

if (MOCK_ENABLED) {
    setMock()
}
