it('Story should have a headline', () => {
  let story = new Story(id='some-id', headline='Some News')
  expect(story.id).toEqual('some-id')
  expect(story.headline).toEqual('Some News')
});

it('Story.headlineComponent returns html headline component', () => {
  let story = new Story(id='some-id', headline='Some News')
  expect(story.headlineComponent()).returnHTML('<li id="some-id" class="headline"><h2>Some News</h2></li>')
});