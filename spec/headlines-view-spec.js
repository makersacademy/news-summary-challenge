function testCreateHtmlString() {

  var headlineList = new HeadlineList();
  headlineList.createArticle("webTitle", "webUrl", "body")
  var headlineListView = new HeadlineListView(headlineList);

  assert.isTrue(headlineListView.createHtmlString() === "<ul><li><a href='#7'>webTitle</a></li></ul>", "'createHtmlString' returns a list of headlines")
};
testCreateHtmlString();
