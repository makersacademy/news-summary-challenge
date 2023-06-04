const NewsClient = require("./newsClient");

require("jest-fetch-mock").enableMocks();

describe("NewsClient", () => {
  beforeEach(() => {
    fetch.resetMocks();

    fetch.mockResponseOnce(
      JSON.stringify({
        response: {
          results: [
            {
              webUrl: "url",
              fields: {
                headline: "A headline",
                thumbnail: "image.png",
              },
            },
          ],
        },
      })
    );
  });

  it("when a fetch request is made to the api it sends back a 200 status and some data", () => {
    const newsClient = new NewsClient();

    return newsClient.fetchTodaysNews(returnedDataFromApi => {
      expect(returnedDataFromApi).toBeTruthy();
    });
  });

  it("when a fetch request is made to fetchHeadlines it returns data in the correct format", () => {
    const newsClient = new NewsClient();

    return newsClient.fetchTodaysNews(returnedDataFromApi => {
      expect(returnedDataFromApi.length).toBe(1);
      expect(returnedDataFromApi[0].headline).toBe("A headline");
      expect(returnedDataFromApi[0].thumbnail).toBe("image.png");
      expect(returnedDataFromApi[0].url).toBe("url");
    });
  });
});
