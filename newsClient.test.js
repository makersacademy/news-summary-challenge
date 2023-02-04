const NewsClient = require("./newsClient");
require("jest-fetch-mock").enableMocks();

describe("NewsClient", () => {
  let newsClient;

  beforeEach(() => {
    newsClient = new NewsClient();
  });

  it("fetches the data from the Gueardian's server", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        sectionId: "sport",
        webTitle: "Wales v Ireland: Six Nations 2023 – live",
      })
    );

    await newsClient.fetchNews((news) => {
      expect(news.sectionId).toEqual("sport");
      expect(news.webTitle).toEqual("Wales v Ireland: Six Nations 2023 – live");
    });
  });
});
