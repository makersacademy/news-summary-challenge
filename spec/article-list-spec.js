describe("ArticleList", function() {
var articleList = new ArticleList();
describe(".initialize", function() {
  it("should have an empty array that will store articles", function() {
    expect(articleList.articles.length).toBe(0);
  });
});
});
