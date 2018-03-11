describe("News", function() {
  var news;

  beforeEach(function() {
    news = new News("headline", "url", 1, "link");
  });

  it("has a headline", function() {
    expect(news.headline).toEqual("headline");
  });

  it("has a url", function() {
    expect(news.url).toEqual("url");
  });

  it("has an id", function() {
    expect(news.id).toEqual(1);
  });

  it("has a link", function() {
    expect(news.linkToImage).toEqual("link");
  });

});
