const NewsApi = require('./newsApi.js')

require('jest-fetch-mock').enableMocks();

describe('newsApi class', () => {
  describe('loadArticles', () => {
    it('loads articles', async () => {
      const api = new NewsApi('api_key');
      fetch.mockResponseOnce(
        JSON.stringify({
          response: {
            results: ['article'],
          },
        })
      )
  
      api.loadArticles((data) => {
        expect(data.response.results[0]).toBe('article')
      })

      expect(fetch.mock.calls.length).toBe(1)
      expect(fetch.mock.calls[0][0]).toBe(
        'https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=api_key'
      )
    })
  })
})