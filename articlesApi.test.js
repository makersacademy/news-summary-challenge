const ArticlesApi = require('./articlesApi');

require('jest-fetch-mock').enableMocks();

let api;
beforeEach(() => {
  api = new ArticlesApi();
})

describe('Articles API', () => {
  it('calls fetch and displays headlines on the page', async () => {
    fetch.mockResponseOnce(JSON.stringify({
      headline: "This is a headline"
    }));

    api.loadArticles((response) => {
      expect(response.headline).toEqual("This is a headline");
    });
  });

  it('it takes a query string and returns matching items', async () => {
    fetch.mockResponseOnce(JSON.stringify({
      headline: "First article"
    }));

    api.loadArticles((response) => {
      expect(response.headline).toEqual(expect.stringContaining("First"));
    }, "First");
  });
});
