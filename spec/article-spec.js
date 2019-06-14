describe("Article Model", function(){
  var article = new Article("test article", "test url");

  it("initialises with an title and a url", function(){
    assert(article.title, "test article");
    assert(article.url, "test url");
  });

  it("returns the title", function(){
    assert(article.getTitle(), "test article");
  });

  it("returns the url", function(){
    assert(article.getURL(), "test url");
  });
});
