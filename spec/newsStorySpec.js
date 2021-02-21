describe('newsStory', function() {
  it('can take a news headline and return it', function(){
    let story = new newsStory();
    story.addHeadline('Testing headline');
    expectEqualMatcher(story.showHeadline(), 'Testing headline');
  })

  it('can take a url of a photo', function() {
    let story = new newsStory();
    let imageTag = 'image_url';
    story.addImage(imageTag);
    expectEqualMatcher(story.showImage(), imageTag);
  })

  it('can take a short summary of the article', function() {
    let story = new newsStory();
    let summaryContent = 'this is a news article about nothing';
    story.addSummary(summaryContent);
    expectEqualMatcher(story.showSummary(), summaryContent);
  })
})
