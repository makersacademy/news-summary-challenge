const GuardianApi = require('./guardianApi');

require('jest-fetch-mock').enableMocks()

describe('Guardian api class', () => {
  it('calls fetch and loads the news headlines', async () => {
    const api = new GuardianApi();
    fetch.mockResponseOnce(JSON.stringify({
      headline: 'This the first headline'
    }));

    api.getHeadlines((news) => {
      expect(news.headline).toBe('This the first headline');
    });
  });
});
