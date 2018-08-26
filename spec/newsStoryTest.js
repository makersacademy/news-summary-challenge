"use strict";

describe('NewsStory', function() {
  it('can show a headline', function() {
    var newsStory = new NewsStory("headline", "content", "url.com", "26 August");
    expect(newsStory.headline()).toBe("headline");
  })
})

 // var news = new News("Orange man falls from high tower - presumably pushed by wife");
      // expect(news.headline()).toEqual("Orange man falls from high tower - presumably pushed by wife");
