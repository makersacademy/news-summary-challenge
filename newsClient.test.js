const NewsClient = require("./newsClient");
require("jest-fetch-mock").enableMocks();

describe("NewsClient", () => {
  let newsClient;

  beforeEach(() => {
    newsClient = new NewsClient();
  });

  it("fetches the data from the Guardian's server", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        response: {
          results: [
            {
              webTitle: "Wales v Ireland: Six Nations 2023 – live",
            },
            {
              webTitle:
                "US shoots down suspected Chinese spy balloon over east coast",
            },
          ],
        },
      })
    );

    await newsClient.fetchNews((news) => {
      expect(news[0].webTitle).toEqual(
        "Wales v Ireland: Six Nations 2023 – live"
      );
      expect(news[1].webTitle).toEqual(
        "US shoots down suspected Chinese spy balloon over east coast"
      );
    });
  });
});
