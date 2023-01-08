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
        userTier: "developer",
        total: 2324223,
        startIndex: 1,
        pageSize: 10,
        currentPage: 1,
        pages: 232423,
        orderBy: "newest",
      })
    );

    client.loadHeadlines((returnedDataFromApi) => {
      expect(returnedDataFromApi.status).toBe("ok");
      expect(returnedDataFromApi.currentPage).toBe(1);

      done();
    });
  });
  it("loadHeadlines catched fetch error", (done) => {
    const client = new NewsClient();

    fetch.mockRejectedValue("Oops, something went wrong!");

    client.loadHeadlines(
      () => {},
      (error) => {
        expect(error).toBe("Oops, something went wrong!");
        done();
      }
    );
  });

  it("calls fetch and loads latest news data based on search filter", (done) => {
    const client = new NewsClient();

    fetch.mockResponseOnce(
      JSON.stringify({
        status: "ok",
        userTier: "developer",
        total: 2324223,
        startIndex: 1,
        pageSize: 10,
        currentPage: 1,
        pages: 232423,
        orderBy: "newest",
      })
    );

    client.filterHeadlines("America", (returnedDataFromApi) => {
      expect(returnedDataFromApi.status).toBe("ok");
      expect(returnedDataFromApi.currentPage).toBe(1);

      done();
    });
  });

  it("loadHeadlines catched fetch error", (done) => {
    const client = new NewsClient();

    fetch.mockRejectedValue("Oops, something went wrong!");

    client.filterHeadlines(
      "America",
      () => {},
      (error) => {
        expect(error).toBe("Oops, something went wrong!");
        done();
      }
    );
  });
});
