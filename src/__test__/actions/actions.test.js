import { setFavorite, deleteFavorite, loginRequest } from '../../client/actions'
import itemMock from '../../__mocks__/itemMock'

describe('Testing Actions', () => {
    test('Test on setFavorite action', () => {
        const payload = itemMock
        const expected = {
            type: 'SET_FAVORITE',
            payload
        }
        expect(setFavorite(payload)).toEqual(expected)
    })
    test('Test on deleteFavorite action', () => {
        const payload = itemMock
        const expected = {
            type: 'DELETE_FAVORITE',
            payload
        }
        expect(deleteFavorite(payload)).toEqual(expected)
    })
    test('Test on loginRequest action', () => {
        const payload = itemMock
        const expected = {
            type: 'LOGIN_REQUEST',
            payload
        }
        expect(loginRequest(payload)).toEqual(expected)
    })
})