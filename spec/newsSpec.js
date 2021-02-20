describe("News", function () {
  it("checks that news has a title", () => {
    let news = new News();
    news.title = "news for today:";
    isEqual(news.title(), `news for today:`);
  });
});
