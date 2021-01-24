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
  describe("getNews()", () => {
    it("is defined", () => {
      checkIf(news).has("getNews").function();
    })
    it("gets the news of the day", () => {
      checkIf(news.getNews()).isEqual("UK vaccine adviser says delay...");
    })
  })
  describe("connectAPI()", () => {
    it("is defined", () => {
      checkIf(news).has("connectAPI").function();
    })
  })
});