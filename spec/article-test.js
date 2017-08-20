describe("Article", function() {
  var headline, url, publicationDate, article;

  headline = "Example headline";
  url = "www.example.com";
  publicationDate = "2017-08-18";
  article = new Article(headline, url, publicationDate);
  secondArticle = new Article(headline, url, publicationDate);

  it("is initialized with an ID which increments for each article", function() {
    assert.isTrue(article.id() === 0)
  });
  it("is initialized with an ID which increments for each article", function() {
    assert.isTrue(secondArticle.id() === 1)
  });
  it("is initialized with a headline", function() {
    assert.isTrue(article.headline() === "Example headline");
  });
  it("is initialized with an external URL", function() {
    assert.isTrue(article.url() === "www.example.com");
  });
  it("is initialized with a publication date", function() {
    assert.isTrue(article.publicationDate() === "2017-08-18")
  });
});
