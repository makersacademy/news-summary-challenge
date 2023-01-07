const NewsClient = require('./newsClient');

require('jest-fetch-mock').enableFetchMocks();


describe('Client class', () => {

  beforeEach(() => {
    fetch.resetMocks()
  })

  it('calls fetch and loads data', (done) => {

    const client = new NewsClient();

    fetch.mockResponseOnce(JSON.stringify({
      response: {
        results: {
          webTitle: "Headline 1"
        }
      }
    }));

    client.loadNews((newsFromApi) => {
      expect(newsFromApi.response.results.webTitle).toBe("Headline 1");

      done();
    });
  });

  it('calls fetch and loads data related to the keyword provided', (done) => {

    const client = new NewsClient();

    fetch.mockResponseOnce(JSON.stringify({
      response: {
        results: {
          webTitle: "Headline 1"
        }
      }
    }));

    client.searchQueryResults("keyword", (newsFromApi) => {
      expect(newsFromApi.response.results.webTitle).toBe("Headline 1");

      done();
    });
  });

});