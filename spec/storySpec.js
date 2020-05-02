it('Story should have a headline', () => {
  let story = new Story(headline='Some News')
  expect(story.headline).toEqual('Some News')
});

it('Story.headlineComponent returns html headline component', () => {
  let story = new Story(headline='Some News')
  expect(story.headlineComponent()).returnHTML("<li><h2>Some News</h2></li>")
});