const NewsClient = require('./src/newsClient');
require('jest-fetch-mock').enableMocks();

describe('NewsClient', () => {
  it('calls fetch and loads article data', (done) => {
    const client = new NewsClient();

    fetch.mockResponseOnce(JSON.stringify ({
      article: "something"
    }));

    client.loadArticles((returnedDataFromApi) => {
      expect(returnedDataFromApi.article).toBe("something");
      done();
    });
  });

  it('calls fetch and loads article data relevant to search query', (done) => {
    const client = new NewsClient();

    fetch.mockResponseOnce(JSON.stringify ({
      article: "article about dogs"
    }));

    client.searchArticles((returnedDataFromApi) => {
      expect(returnedDataFromApi.article).toBe("article about dogs");
      done();
    }, "dogs");
  });

  




});