Describe("NewsArticle", function() {
  It ( "contains the News Article handed to it", function() {
    var newsArticle = new NewsArticle("Latest News")
    Demand(newsArticle.returnNewsArticle()).toBe("Latest News")
  });
});
