const newsApi = require("./newsApi");

require("jest-fetch-mock").enableMocks();

describe(newsApi, () => {
  it("calls fetch and loads data", () => {
    const api = new newsApi();

    fetch.mockResponseOnce(
      JSON.stringify({
        response: { results: "Some value" },
      })
    );
    api.loadNews("", (returnedDataFromApi) => {
      expect(returnedDataFromApi).toBe("Some value");
    });
  });
});
