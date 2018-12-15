describe("Article Model", function() {

  it("An article can be instantiated", function() {
    article = new Article("thumbnail", "headline", "url");
    expect(article.thumbnail).toEqual("thumbnail");
    expect(article.headline).toEqual("headline");
    expect(article.url).toEqual("url");
  })
})