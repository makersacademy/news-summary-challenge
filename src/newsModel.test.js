const NewsModel = require("./newsModel");

describe("NewsModel", () => {
  beforeEach(() => {
    model = new NewsModel();
  });

  it("gets all news stories", () => {
    expect(model.getNews()).toEqual([]);
  });

  it("returns an array of news stories that match the search criteria", () => {
    model.allNews = [
      {
        webTitle:
          "Russia-Ukraine war live: Germany approves more tanks for Ukraine; EU to launch humanitarian demining drive",
      },
      {
        webTitle: "Apples are just the best",
      },
      {
        webTitle: "The war against apples has really turned a corner",
      },
    ];

    const searchCriteria = "war";
    const result = model.getSearchedNews(searchCriteria);

    expect(result).toEqual([
      {
        webTitle:
          "Russia-Ukraine war live: Germany approves more tanks for Ukraine; EU to launch humanitarian demining drive",
      },
      {
        webTitle: "The war against apples has really turned a corner",
      },
    ]);
  });
});
