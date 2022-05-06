const newsApi = require("./newsApi");
require("jest-fetch-mock").enableMocks();

describe(newsApi, () => {
  it("calls fetch and loads data", () => {

    const api = new newsApi();

    fetch.mockResponseOnce(
      JSON.stringify({
        name: "Some value",
        id: 123,
      })
    );

    api.loadNews((returnedDataFromApi) => {
      expect(returnedDataFromApi.name).toBe("Some value");
      expect(returnedDataFromApi.id).toBe(123);
    })
  })
});

