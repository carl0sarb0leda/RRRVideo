import reducer from '../../client/reducers/index'
import itemMock from '../../__mocks__/itemMock'

describe('Testing Reducers', () => {
    test('Test return Initial State', () => {
        expect(reducer({}, '')).toEqual({})
    })
    test('Test on SET_FAVORITE', () => {
        const initialState = {
            mylist: [],
        }
        const action = {
            type: 'SET_FAVORITE',
            payload: itemMock
        }
        const expected = {
            mylist: [
                itemMock
            ]
        }
        expect(reducer(initialState, action)).toEqual(expected)
    })
    test('Test on DELETE_FAVORITE', () => {
        const initialState = {
            mylist: [itemMock],
        }
        const action = {
            type: 'DELETE_FAVORITE',
            payload: itemMock.id
        }
        const expected = {
            mylist: [],
        }
        expect(reducer(initialState, action)).toEqual(expected)
    })
})