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
})