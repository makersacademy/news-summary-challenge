it('Story should have a headline', () => {
  let story = new Story(headline='Some News')
  expect(story.headline).toEqual('Some News')
});