describe("ArticleListView", function() {
  var articleList = new ArticleList();
  var articleListView = new ArticleListView(articleList);
describe(".initialize", function() {
  it("should take an articlelist object as a parameter and assign that to a constructor property", function() {
    expect(articleListView.articleList).toBe(articleList);
  });
});
describe(".html", function() {
  it("should return an html list of articles", function() {
    expect(articleListView.html()).toBe('<ul></ul>');
  });
});
});
