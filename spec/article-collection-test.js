describe("Article collection", function() {
  var headline, url, publicationDate, article;

  headline = "Example headline";
  url = "www.example.com";
  publicationDate = "2017-08-18";

  var mockArticleCreateCount = 0;

  function MockArticle() {
    mockArticleCreateCount++;
  };

  MockArticle.prototype = {
    headline: function() { return "Example headline" }
  }

  var articleCollection = new ArticleCollection(MockArticle);

  it("is initialized with an empty array of articles", function() {
    assert.isTrue(articleCollection.articles().length === 0);
  });

  articleCollection.createArticle(headline, url, publicationDate);
  it("can create a new article", function() {
    assert.isTrue(mockArticleCreateCount === 1);
  });
  it("adds article to its array", function() {
    assert.isTrue(articleCollection.articles().length === 1);
  });

  articleCollection.createArticle(headline, url, publicationDate);
  it("doesn't allow duplicate articles", function() {
    assert.isTrue(articleCollection.articles().length === 1);
  });
});
