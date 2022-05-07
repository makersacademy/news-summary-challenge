const NewsApi = require("./newsApi");
require("jest-fetch-mock").enableMocks();

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)

describe(NewsApi, () => {
  it("calls fetch and loads data", () => {
    // 1. Instantiate the class
    const api = new NewsApi();

    // 2. We mock the resposne from 'fetch'
    // The mocked result will depend on what your API
    // normally returns - you want your mocked response
    // to "look like" as the real response as closely as
    // possible (it should have the same fields).

    fetch.mockResponseOnce(
      JSON.stringify({
        type: "article",
        sectionName: "Sport",
      })
    );

    // 3. We call the method, and use 'expect;
    // to assert the values we get back contain
    // what we expect.

    api.loadArticles((returnedDataFromApi) => {
      expect(returnedDataFromApi.type).toBe("article");
      expect(returnedDataFromApi.sectionName).toBe("Sport");
    });
  });
});
