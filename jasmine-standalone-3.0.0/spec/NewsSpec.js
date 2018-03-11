describe("News", function() {
  beforeEach(function() {
    news = new News();
  });

  describe('headlines', function() {
    it("should be an array", function() {
      // news.getHeadlines(apiUrl);
      expect(news.headlines).toEqual(jasmine.any(Array));
    });
  });
  // it("should be able to get all todays headlines", function() {
  //   news.get();
  //   expect(news.all
  // });

});
