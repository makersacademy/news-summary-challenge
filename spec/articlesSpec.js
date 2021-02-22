describe("News", function () {
  it("checks that news has a title", () => {
    let news = new News();
    news.title = "news for today:";
    isEqual(news.title, "news for today:");
  });

  it("checks that news has a summary", () => {
    let news = new News();
    news.summary = "A full descritpion of the news below";
    isEqual(news.summary, "A full descritpion of the news below");
  });
});
