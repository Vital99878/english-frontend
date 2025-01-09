import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import articles from '@mock/sets/articles'

export const MOCK_ENABLED = false

export const mockAPI = axios.create({
    baseURL: '/localhost',
})

export const mockAdapter = new MockAdapter(mockAPI, {
    delayResponse: 1000,
    onNoMatch: 'passthrough',
})


function turnOnMock() {
    articles()
}

if (MOCK_ENABLED) {
    turnOnMock()
}
