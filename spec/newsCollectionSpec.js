describe("NewsCollection", function() {
    var collection;
    var news;
  
    beforeEach(function() {
     collection = new NewsCollection();
     news = jasmine.createSpyObj('news', ['addSummary']);
    });
  
    it("should console log an error message", function() {
        spyOn(console, 'log').and.callThrough();
        collection.getNewsByUrl()
      expect(console.log).toHaveBeenCalled();
    });

    it("should return a news", function() {
        news.headline = "Today's news";
        news.articleUrl = "http://news.com";
        news.thumbnailUrl = "news.jpg";
        news.body = "Today's news";
        news.summary = "Summary";
        console.log(" news",  news)
        console.log("collection.addNews(news)",collection.addNews(news))
      expect( collection.addNews(news)).toEqual(news);
    });
  
  });
  