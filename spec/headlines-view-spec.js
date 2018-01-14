function testCreateHtmlString() {

  var headlineList = new HeadlineList();
  headlineList.createArticle("webTitle", "webUrl", "body")
  var headlineListView = new HeadlineListView(headlineList);

  assert.isTrue(headlineListView.createHtmlString() === "<ul><li><a href='#1'>webTitle</a></li></ul>", "'createHtmlString' returns a list of headlines")
};
testCreateHtmlString();
