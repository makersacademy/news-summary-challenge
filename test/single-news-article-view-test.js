describe("Single news article view", function() {
  it("initializes with a news article", function() {
    news = new News();
    singleNewsArticleView = new SingleNewsArticleView(news);
    expect(singleNewsArticleView.getArticle()).isEqualTo(news);
  })
  it("returns news article in HTML", function() {
    news = new News('Michelle Obama declares self President');
    singleNewsArticleView = new SingleNewsArticleView(news);
    expect(singleNewsArticleView.renderArticle()).isEqualTo('<div>Michelle Obama declares self President</div>')
  })
})
