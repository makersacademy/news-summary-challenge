test.describe("Article collection", function() {

  var title = "test title";
  var url = "www.test.com";
  var date = "2017-08-18";

  var articlesCount = 0;

  function MockArticle() {
    articlesCount++;
  }
console.log(articlesCount)
  MockArticle.prototype = {
    title: function() { return "Example headline" }
  };

  var articleList = new ArticleList(MockArticle);

  test.it("is initialized with an empty array of articles", function() {
    assert.isTrue(articleList.list.length === 0);
  });

  articleList.createArticle(title, url, date);
  test.it("can create a new article", function() {
    assert.isTrue(articlesCount === 1);
  });

  test.it("adds article to its array", function() {
    assert.isTrue(articleList.list.length === 1);
  });

  articleList.createArticle(title, url, date);
  test.it("doesn't allow duplicate articles", function() {
    assert.isTrue(articleList.list.length === 2);
  });
});
