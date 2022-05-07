require('jest-fetch-mock').enableMocks()
const NewsApi = require('./newsApi');

describe('NewsAPI', () => {
  describe('#fetchNews', () => {
    it('loads news article headlines by using The Guardian API', () => {
      const newsApi = new NewsApi();
      fetch.mockResponseOnce(JSON.stringify({
        name: 'news',
        headline: 'test'
      }))
      newsApi.fetchNews((data) => {
        expect(data.headline).toEqual('test')
      })
    })
  })
})

