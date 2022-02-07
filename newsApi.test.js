/**
 * @jest-environment jsdom
 */
const NewsApi = require('./newsApi.js');

require('jest-fetch-mock').enableFetchMocks();
describe('NewsApi', () => {
  it('calls fetch and loads articles', async() => {
    const api = new NewsApi();
    fetch.mockResponseOnce(JSON.stringify(
      'This article is coming from the test'
    ));

    api.loadArticles(articleInfo => {
      expect(result).toBe('This article is coming from the test');
    });
    
    console.log(fetch.mock.calls); 
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual('https://content.guardianapis.com/search?page=1&q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=85d273bb-00eb-44b5-807a-cde162f4470d')
  });
});


