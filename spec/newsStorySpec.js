describe('newsStory', function() {
  it('can take a news headline and return it', function(){
    story = new newsStory();
    story.addContent('Testing headline');
    expectEqualMatcher(story.showHeadline(), 'Testing headline');
  })
})