import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import articles from '@mock/sets/articles'

export const MOCK_ENABLED = true

export const mockAPI = axios.create({
})

export const mockAdapter = new MockAdapter(mockAPI, {
    delayResponse: 700,
    onNoMatch: 'throwException',
})


async function turnOnMock() {
    await articles()
}

if (MOCK_ENABLED) {
    turnOnMock().then(r => console.log(r))
}
