const NewsApi = require('./newsApi');

require('jest-fetch-mock').enableMocks()

describe('news class', () => {
  it('calls fetch and loads repo info', async () => {
    const api = new NewsApi();
    
    fetch.mockResponseOnce(JSON.stringify({
      headline: 'Something happened today, read on to find out what'
    }));

    api.getNews((news) => {
      expect(news.headline).toBe('Something happened today, read on to find out what');
    });
  });
});