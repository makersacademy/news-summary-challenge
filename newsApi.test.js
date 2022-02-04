const NewsApi = require('./newsApi');

require('jest-fetch-mock').enableMocks()

describe('news class', () => {
  it('calls fetch and loads repo info', async () => {
    const api = new NewsApi();
    
    fetch.mockResponseOnce(JSON.stringify({
      results: ['Something happened today, read on to find out what']
    }));

    api.getNews((data) => {
      expect(data.results).toBe(['Something happened today, read on to find out what']);
    });
  });
});