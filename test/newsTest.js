describe("Note Class", () => {
  it("is defined", () => {
    var news = new News();
    checkIf(news).isClass();
  })
  describe("headline()", () => {
    it("is a function", () => {
      var news = new News();
      checkIf(news).has('headline').function();
    })
    it("is equal", () => {
      var news = new News();
      checkIf(news.headline()).isEqual('4');
    })
  })
  describe("identicals()", () => {
    it("is a function", () => {
      var news = new News();
      checkIf(news).has('identicals').function();
    })
    it("are identicals", () => {
      var news = new News();
      checkIf(news.identicals()).isIdenticalTo("4");
    })
  })
  describe("real()", () => {
    it("is a function", () => {
      var news = new News();
      checkIf(news).has('real').function();
    })
    it("is true", () => {
      var news = new News();
      checkIf(news.real()).isTrue();
    })
  })
});