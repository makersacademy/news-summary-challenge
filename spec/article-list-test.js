describe("ArticleList", function() {
  it("stores an array of articles", function() {
    var articleList = new ArticleList();
    expect(articleList.articles.length).toEqual(0);
  });

  it("returns all the articles in the array", function() {
    var articleList = new ArticleList();
    articleList.add("Hello");
    expect(articleList.getArticles()[0].text).toEqual("Hello");
  });

  it("gives first article a unique id", function() {
    var articleList = new ArticleList();
    articleList.add("Hello");
    expect(articleList.getArticles()[0].id).toEqual(0);
  });

  it("gives multiple articles a unique id", function() {
    var articleList = new ArticleList();
    articleList.add("Hello");
    articleList.add("Bonjour");
    articleList.add("Hola");
    expect(articleList.getArticles()[2].id).toEqual(2);
  });
});
