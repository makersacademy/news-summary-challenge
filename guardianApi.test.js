const GuardianApi = require('./guardianApi');

require('jest-fetch-mock').enableMocks();

beforeEach(() => {
  api = new GuardianApi();

  fetch.mockResponseOnce(JSON.stringify({
    response: { results: [{ webTitle: 'This the first headline' }] }
  }));
});

describe('Guardian api class', () => {
  it('calls fetch and loads the news headlines', async () => {

    api.getHeadlines(news => {
      expect(news.response.results[0].webTitle).toEqual('This the first headline');
    });
  });

  it('returns the headline based on the search field input by the user', async () => {

    api.searchHeadlines('first', news => {
      expect(news.response.results[0].webTitle).toEqual('This the first headline');
    });
  });
});
