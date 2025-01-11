import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import articles from '@mock/sets/articles'

export const MOCK_ENABLED = true

export const mockAPI = axios.create({
    baseURL: '/',
})

export const mockAdapter = new MockAdapter(mockAPI, {
    delayResponse: 700,
    onNoMatch: 'passthrough',
})


function turnOnMock() {
    articles()
}

if (MOCK_ENABLED) {
    turnOnMock()
}
