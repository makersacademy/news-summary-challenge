describe("Article Model", function() {

  it("An Article object can be instantiated", function() {
    article = new Article("thumbnail", "section", "headline", "byline", "firstParagraph", "secondParagraph", "thirdParagraph", "url");
    // expect(article.id).toEqual(0);
    expect(article.thumbnail).toEqual("thumbnail");
    expect(article.section).toEqual("section");
    expect(article.headline).toEqual("headline");
    expect(article.byline).toEqual("byline");
    expect(article.firstParagraph).toEqual("firstParagraph");
    expect(article.secondParagraph).toEqual("secondParagraph");
    expect(article.thirdParagraph).toEqual("thirdParagraph");
    expect(article.url).toEqual("url");
  })
})