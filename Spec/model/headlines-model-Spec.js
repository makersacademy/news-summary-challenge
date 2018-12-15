describe("Headlines Model", function() {
  
  it("A Headlines object can be instantiated", function() {
    headlines = new Headlines()
    expect(headlines.list).isArray(true);
  })

  it("Should add an article to the list array", function() {
    headlines.addArticle("thumbnail", "headline", "firstParagraph", "secondParagraph", "thirdParagraph", "url");
    expect(headlines.returnList()[0].headline).toEqual("headline")
  })
})
