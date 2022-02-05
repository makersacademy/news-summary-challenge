const NewsApi = require("./newsApi")

require('jest-fetch-mock').enableMocks();

describe('NewsApi class', () => {
  it('calls fetch and loads news article details', async() => {
    const api = new NewsApi();
    fetch.mockResponseOnce(JSON.stringify({
       webTitle: 'Mock Headline 1' 
    }));

    api.loadHeadlines((headline) => {
      expect(headline.webTitle).toEqual('Mock Headline 1')
    })
  })
})