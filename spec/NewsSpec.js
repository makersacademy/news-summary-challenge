describe("News", function() {
  var news;

  beforeEach(function() {
    news = new News("headline", "summary");
  });

  it("has a headline", function() {
    expect(news.headline).toEqual("headline");
  });

  it("has a summary", function() {
    expect(news.summary).toEqual("summary");
  });

  describe("", function() {
    it("", function() {
    });

    it("", function() {
    });
  });

});
