const NewsClient = require("./NewsClient");

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require("jest-fetch-mock").enableMocks();

describe("Client class", () => {
  it("calls fetch and loads latest news data", (done) => {
    const client = new NewsClient();

    fetch.mockResponseOnce(
      JSON.stringify({
        status: "ok",
        currentPage: 1,
      })
    );

    client.loadHeadlines((returnedDataFromApi) => {
      expect(returnedDataFromApi.status).toBe("ok");
      expect(returnedDataFromApi.currentPage).toBe(1);

      done();
    });
  });
});
