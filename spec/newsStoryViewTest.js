describe('NewsStoryView', function() {
  it('displays the correct HTML content', function() {
    var newsStory = new NewsStory("headline", "content");
    var newsStoryView = new NewsStoryView(newsStory);
    expect(newsStoryView.htmlParser()).toBe(`<div><h2>headline</h2><p>content</p></div>`);    
  })
})
