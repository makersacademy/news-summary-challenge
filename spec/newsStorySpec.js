describe('newsStory', function() {
  it('can take a news headline and return it', function(){
    let story = new newsStory();
    story.addContent('Testing headline');
    expectEqualMatcher(story.showHeadline(), 'Testing headline');
  })

  it('can take a url of a photo', function() {
    let story = new newsStory();
    let imageTag = 'image_url';
    story.addContent('Testing headline', imageTag);
    expectEqualMatcher(story.showImage(), imageTag);
  })

  it('can take a short summary of the article', function() {
    let story = new newsStory();
    let imageTag = 'image_url';
    let summaryContent = 'this is a news article about nothing';
    story.addContent('Testing headline', imageTag, summaryContent);
    expectEqualMatcher(story.showSummary(), summaryContent);
  })
})