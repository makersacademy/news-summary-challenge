describe("News", function() {
  
    it("initiates the new class", function() {
        let news = new News();
        news.headline = "Today's news";
        news.articleUrl = "http://news.com";
        news.thumbnailUrl = "news.jpg";
        news.body = "Today's news";
        news.summary = "Summary";
    expect(news.headline).toEqual("Today's news")
    expect(news.articleUrl).toEqual("http://news.com")
    expect(news.thumbnailUrl).toEqual("news.jpg")
    expect(news.body).toEqual("Today's news")
    expect(news.summary).toEqual("Summary")
    });
    
  });
  