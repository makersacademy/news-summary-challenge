const NewsApi = require("./newsApi")

require('jest-fetch-mock').enableMocks();

describe('NewsApi class', () => {
  it('calls fetch and loads news article details', async () => {
    const api = new NewsApi();
    fetch.mockResponseOnce(JSON.stringify({
      webtitle: 'Mock Headline 1'
    }))

    api.loadHeadlines((headline) => {
      expect(headline.webtitle).toBe('Mock Headline 1')
    } )
  })
})