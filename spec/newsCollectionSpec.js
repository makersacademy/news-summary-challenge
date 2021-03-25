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

    
  
  });
  