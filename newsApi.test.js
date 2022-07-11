const NewsApi = require('./newsApi');

require("jest-fetch-mock").enableMocks();

describe('NewsApi', () => {
  it('uses fetch to obtain articles', async () => {
    const api = new NewsApi();

    fetch.mockResponseOnce(
      JSON.stringify(["This is a test article"])
    );

    api.loadArticles((response) => {
      expect(response).toStrictEqual(["This is a test article"]);
    })
  });
});