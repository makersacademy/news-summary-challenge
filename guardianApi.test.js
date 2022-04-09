const GuardianApi = require('./guardianApi');

require('jest-fetch-mock').enableMocks()

describe('Guardian api class', () => {
  it('calls fetch and loads the news headlines', async () => {
    const api = new GuardianApi();
    fetch.mockResponseOnce(JSON.stringify({
      webTitle: 'This the first headline'
    }));

    api.getHeadlines('item to search', news => {
      expect(news.webTitle).toEqual('This the first headline');
    });
  });
});
