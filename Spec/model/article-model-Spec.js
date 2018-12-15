describe("Article Model", function() {

  it("An Article object can be instantiated", function() {
    article = new Article("thumbnail", "headline", "firstParagraph", "secondParagraph", "thirdParagraph", "url");
    // expect(article.id).toEqual(0);
    expect(article.thumbnail).toEqual("thumbnail");
    expect(article.headline).toEqual("headline");
    expect(article.firstParagraph).toEqual("firstParagraph");
    expect(article.secondParagraph).toEqual("secondParagraph");
    expect(article.thirdParagraph).toEqual("thirdParagraph");
    expect(article.url).toEqual("url");
  })
})