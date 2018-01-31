function testCreateHtmlString() {

  var headlineList = new HeadlineList();
  headlineList.createHeadline("webTitle", "webUrl", "thumbnail")
  var headlineListView = new HeadlineListView(headlineList);

  assert.isTrue(headlineListView.createHtmlString() === "<ul><li><a href='#6'>webTitle<img src=thumbnail></a></li></ul>", "'createHtmlString' returns a list of headlines")
};
testCreateHtmlString();
