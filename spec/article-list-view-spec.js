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
    articleList.create("this is an article", "www.google.com");
    expect(articleListView.html()).toBe("<ul><li><a href='www.google.com'>this is an article</a></li></ul>");
    });
  it("should return an html list of multiple articles", function() {
    articleList.create("this is another article", "www.facebook.com");
    expect(articleListView.html()).toBe("<ul><li><a href='www.google.com'>this is an article</a></li><li><a href='www.facebook.com'>this is another article</a></li></ul>");
  });
  it("should contain the link to the original article", function() {
    expect(articleListView.html()).toBe("<ul><li><a href='www.google.com'>this is an article</a></li><li><a href='www.facebook.com'>this is another article</a></li></ul>")
  })
  });
});
