const NewsApi = require('./newsApi');
require("jest-fetch-mock").enableMocks();

describe("NewsApi class", () => {
  it("uses fetch to get article titles", () => {
    const api = new NewsApi();

    fetch.mockResponseOnce(JSON.stringify({
      response: { results: [ { webTitle : "Student decides mocking fetch is terrible" }]}
    }));

    api.loadArticles(res => {
      expect(res.response.results[0].webTitle).toEqual("Student decides mocking fetch is terrible");
    })
  });

  it("uses fetch to make post request to search for articles", () => {
    const api = new NewsApi();

    fetch.mockResponseOnce(JSON.stringify({
      response: { results: [ { webTitle : "Student decides mocking fetch is terrible" }]}
    }));

    api.searchArticles(res => {
      expect(res.response.results[0].webTitle).toEqual("Student decides mocking fetch is terrible");
    })
  });
  
});