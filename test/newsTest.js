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
      checkIf(news.date).isEqual("2021-01-24");
    })
  })
  describe("connectAPI()", () => {
    it("is defined", () => {
      checkIf(news).has("connectAPI").function();
    })
  })
  describe("renderNews()", () => {
    it("is defined", () => {
      checkIf(news).has("renderNews").function();
    })
  })
});