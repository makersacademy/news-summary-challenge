describe("ArticleList", function() {
var articleList = new ArticleList();
describe(".initialize", function() {
  it("should have an empty array that will store articles", function() {
    expect(articleList.articles.length).toBe(0);
  });
});
describe(".create()", function() {
  it("stores a new article with the headline given", function() {
    articleList.create("new article", "www.google.com", "this is a summary");
    var article = articleList.articles[0];
    expect(article instanceof Article).toBe(true);
    expect(article.headline).toBe("new article");
    expect(article.id).toBe(0);
    expect(article.webURL).toBe("www.google.com")
    expect(article.summary).toBe("this is a summary")
  });
});
});
