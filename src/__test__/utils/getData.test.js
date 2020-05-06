import getData from '../../client/utils/getData'

describe('Fetch API', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })
    test('Call API and return data', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))
        return getData('https://google.com')
            .then((response) => {
                expect(response.data).toEqual('12345') //Validate the response 
            })
        expect(fetch.mock.calls[0][0]).toEqual('https://google.com') // Validate the api has been called
    })

})