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
  it("should return an html list of an article when created", function() {
    articleList.create("this is an article");
    expect(articleListView.html()).toBe("<ul><li>this is an article</li></ul>");
    });
  it("should return an html list of multiple articles", function() {
    articleList.create("this is another article");
    expect(articleListView.html()).toBe("<ul><li>this is an article</li><li>this is another article</li></ul>");
  });
  });
});
