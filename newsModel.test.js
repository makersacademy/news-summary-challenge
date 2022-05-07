const NewsModel = require("./newsModel");

describe("NewsModel", () => {
  let newsModel = new NewsModel();

  it("initially returns an empty array", () => {
    expect(newsModel.getNews()).toEqual([]);
  });

  describe("#addNews", () => {
    it("can add a news headline into the news array", () => {
      newsModel.addNews({ webTitle: "This is a news article" });
      expect(newsModel.getNews()).toEqual([
        { webTitle: "This is a news article" },
      ]);
    });
  });

  describe("#setNews", () => {
    it("can add multiple news headline into the news array taken from the Api", () => {
      newsModel.setNews([
        { webTitle: "This is a news article" },
        { webTitle: "This is also a news article" },
      ]);
      expect(newsModel.getNews()).toEqual([
        { webTitle: "This is a news article" },
        { webTitle: "This is also a news article" },
      ]);
    });
  });
});
