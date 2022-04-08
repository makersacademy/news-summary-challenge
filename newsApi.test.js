const NewsApi = require('./newsApi');
require('jest-fetch-mock').enableMocks();

describe('NewsApi', () => {
  const api = new NewsApi;

  it('fetches headlines with API requests', () => {
    fetch.mockResponseOnce(JSON.stringify({
      response: { results: [ { webTitle : 'Everton win Champions League again' }]}
    }));

    api.loadArticles(res => {
      expect(res.response.results[0].webTitle).toEqual('Everton win Champions League again');
    })
  });
});
