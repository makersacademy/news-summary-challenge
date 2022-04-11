require('jest-fetch-mock').enableMocks();

const NewsApi = require('./newsApi.js');

describe("NewsApi", () => {
it("fetch POST request to searach for story", () => {
    const newsApi = new NewsApi();

    fetch.mockResponseOnce(JSON.stringify({
      response: { results: [ { webTitle : "News is really depressing" }]}
    }));

    newsApi.searchStory(result => {
      expect(result.response.results[0].webTitle).toEqual("News is really depressing");
    });
  });
  
});