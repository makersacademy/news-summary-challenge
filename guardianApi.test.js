const GuardianApi = require('./guardianApi');

require('jest-fetch-mock').enableMocks()

beforeEach(() => {
  api = new GuardianApi();

  fetch.mockResponseOnce(JSON.stringify({
    response: { results: [ { webTitle: 'This the first headline' }]}
  }));
});

describe('Guardian api class', () => {
  it('calls fetch and loads the news headlines', async () => {

    api.getHeadlines(news => {
      expect(news.response.results[0].webTitle).toEqual('This the first headline');
    });
  });

  // it('sends a POST request to search for a specific headline', async () => {

  //   api.searchHeadlines(news => {
  //     expect(news.response.results[0].webTitle).toEqual('This the first headline');
  //   });
  // });
});
