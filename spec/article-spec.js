describe("Article Model", function(){
  var article = new Article("test article", "test url", "test thumbnail");

  it("initialises with an title and a url", function(){
    assert(article.title, "test article");
    assert(article.url, "test url");
    assert(article.thumbnail, "test thumbnail");
  });

  it("returns the title", function(){
    assert(article.getTitle(), "test article");
  });

  it("returns the url", function(){
    assert(article.getURL(), "test url");
  });

  it("returns the url", function(){
    assert(article.getThumbnail(), "test thumbnail");
  });
});
