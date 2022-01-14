const NewsApi = require('./newsApi');

require('jest-fetch-mock').enableMocks()

describe('NewsApi class', () => {
  it('loadNews retrieves the news data from the guardian api', () => {
    const api = new NewsApi();
    fetch.mockResponseOnce(JSON.stringify({
      headline: 'Boris Party'
    }));
    api.loadNews((newsData) => {
      expect(newsData.headline).toEqual('Boris Party');
    })
  })
})