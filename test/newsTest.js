describe("Note Class", () => {
  var news = new News();
  it("is defined", () => {
    checkIf(news).isClass();
  })
  describe("getDate()", () => {
    it("is defined", () => {
      checkIf(news).has("getDate").function();
    })
    it("gets a date", () => {
      checkIf(news.date).isEqual("20/Dec/2021");
    })
  })
});