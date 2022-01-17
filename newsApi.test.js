require('jest-fetch-mock').enableMocks();

const NewsApi = require('./newsApi');

describe('News Api', () => {
  it('calls fetch and displays news', async () => {
    const api = new NewsApi();
    fetch.mockResponseOnce(JSON.stringify({
      body: ['This is an article']
    }));
    api.retrieveNewsData(news => {
      expect(news.body[0]).toBe('This is an article');
    });
  });
});