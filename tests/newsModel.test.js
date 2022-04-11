const NewsModel = require("../newsModel");

describe("News Model", () => {
  const news = new NewsModel();
  
  it("starts off with no news", () => {
    expect(news.displayNews()).toEqual([]);
  });

  it("creates new news", () => {
    news.addNews("Joy is now illegal");
    expect(news.displayNews().length).toBe(1);
    expect(news.displayNews()).toEqual(["Joy is now illegal"]);
  });

  it("displays all the news", () => {
    news.addNews("Nothing new");
    expect(news.displayNews().length).toBe(2);
    expect(news.displayNews()).toEqual(["Joy is now illegal", "Nothing new"]);
  });

  it("sets the news to a data given", () => {
    news.setNews(["one", "two", "three"]);
    expect(news.displayNews().length).toBe(3);
    expect(news.displayNews()).toEqual(["one", "two", "three"]);
  });
});
