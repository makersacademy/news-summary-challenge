describe("App", function() {
  var news;

  beforeEach(function() {
    news = new News("headline", "url");
  });

  it("has a headline", function() {
    expect(news.headline).toEqual("headline");
  });

  it("has a url", function() {
    expect(news.url).toEqual("url");
  });

  describe("", function() {
    it("", function() {
    });

    it("", function() {
    });
  });

});
