describe("newsreel", () => {
  it("should make 10 news items from an object with 10 news articles", async () => {
    console.log(apiResult.response.results);
    function mockNewsItem(apiResponse, articleNumber) {
      this.partOne = apiResponse;
      this.articleNumber = articleNumber;
    }
    const testNews = new newsReel(mockNewsItem,apiResult.response.results);
    const initialArticleCount = testNews.newsPieces.length;
    testNews.articleParser();
    const finalArticleCount = testNews.newsPieces.length;
    expect(finalArticleCount - initialArticleCount).toEqual(10);
  })
})