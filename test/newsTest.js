describe("Note Class", () => {
  it("is defined", () => {
    var news = new News();
    checkIf(news).isClass();
  })
  describe("headline()", () => {
    it("has a function", () => {
      var news = new News();
      checkIf(news).has('headline').function();
    })
  })
});