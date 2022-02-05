require('jest-fetch-mock').enableFetchMocks()
const NewsApi = require('./newsApi')
describe('NotesApi class', () => {
    it('calls fetch and loads news', async() => {
        
        fetch.mockResponseOnce(JSON.stringify(
            'these news come from the guardian API'
        ));
        const api = await new NewsApi();

        await api.loadNews((result) =>{
            expect(result).toBe('these news come from the guardian API')
        })
    })
})
