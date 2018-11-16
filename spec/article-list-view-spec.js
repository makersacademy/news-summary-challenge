describe("ArticleListView", function() {
  var articleList = new ArticleList();
  var articleListView = new ArticleListView(articleList);
describe(".initialize", function() {
  it("should take an articlelist object as a parameter and assign that to a constructor property", function() {
    expect(articleListView.articleList).toBe(articleList);
  });
});
describe(".html", function() {
  it("should return an empty html list of articles", function() {
    expect(articleListView.html()).toBe('<ul></ul>');
  });
  it("should return an html list of articles when created", function() {
    articleList.create("this is an article");
    expect(articleListView.html()).toBe("<ul><li><a href='#articlesummary/0'> this is an article</a></li></ul>");
    });
  });
});
