const NewsApi = require('./newsApi');
require('jest-fetch-mock').enableMocks();

describe('NewsApi', () => {
  const api = new NewsApi;

  it('fetches headlines with API requests', () => {
    fetch.mockResponseOnce(JSON.stringify({
      response: { results: [ { webTitle: 'Everton win Champions League again' }]}
    }));

    api.loadArticles(res => {
      expect(res.response.results[0].webTitle).toEqual('Everton win Champions League again');
    })
  });

  it('can search for articles with a post request', () => {
    fetch.mockResponseOnce(JSON.stringify({
      response: { results: [ { webTitle: 'And another!' }]}
    }));

    api.searchArticles(res => {
      expect(res.response.results[0].webTitle).toEqual('And another!');
    });
  });
});
