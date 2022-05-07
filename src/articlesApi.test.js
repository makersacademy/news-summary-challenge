const ArticlesApi = require('./articlesApi');
require("jest-fetch-mock").enableMocks();

describe('ArticlesApi', () => {
  it('loadArticles fetches the news headlines from the server', () => {
    const api = new ArticlesApi();

    const apiResponse = {
      response: [{
        id: 9473648,
        webTitle: 'Real Madrid reach the Champions League final',
        thumbnail: 'somepicture.jpg',
        webURL: 'http://www.somelink.com',
        otherInfo: 'random info'
      }]
    }

    fetch.mockResponseOnce(JSON.stringify(apiResponse));

    api.loadArticles((response) => {
      expect(response).toEqual(apiResponse);
    })
  });
});