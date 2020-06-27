it("Story should have a headline", () => {
  let story = new Story((id = "some-id"), (headline = "Some News"));
  expect(story.id).toEqual("some-id");
  expect(story.headline).toEqual("Some News");
});

it("Story.headlineComponent returns html headline component", () => {
  let story = new Story("some-id", "Some News", "/example.png");
  expected =
    '<li id="some-id" class="headline"><img src="/example.png"><h2>Some News</h2></li>';
  expect(story.headlineComponent()).returnHTML(expected);
});
