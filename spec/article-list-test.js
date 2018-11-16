describe("ArticleList", function() {
  it("stores an array of articles", function() {
    var articleList = new ArticleList();
    expect(articleList.articles.length).toEqual(0);
  });

  it("returns all the articles in the array", function() {
    var articleList = new ArticleList();
    articleList.add("Football match score");
    expect(articleList.getArticles()[0].headline).toEqual("Football match score");
  });

  it("gives first article a unique id", function() {
    var articleList = new ArticleList();
    articleList.add("Football match score");
    expect(articleList.getArticles()[0].id).toEqual(0);
  });

  it("gives multiple articles a unique id", function() {
    var articleList = new ArticleList();
    articleList.add("Football match score");
    articleList.add("Pound drops again");
    articleList.add("Black Friday 2018");
    expect(articleList.getArticles()[2].id).toEqual(2);
  });
});
