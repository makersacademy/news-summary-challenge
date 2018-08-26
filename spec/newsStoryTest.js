"use strict";

  describe('NewsStory', function() {
    it('can show a headline', function() {
      var article = new NewsStory("headline", "content", "url.com", "26 August");
      expect(article.headline()).toEqual("headline");
    })
  })

 // var news = new News("Orange man falls from high tower - presumably pushed by wife");
      // expect(news.headline()).toEqual("Orange man falls from high tower - presumably pushed by wife");
