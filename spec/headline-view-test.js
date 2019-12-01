function testReturnOneHTML() {
  var headlineList = new HeadlineList;
  var headline = new Headline("The Title", "The Article", "The Image Link");
  headlineList.createAndStore(headline);
  var headlineView = new HeadlineView(headlineList);
  assert.isTrue(headlineView.returnHTML() === "<ul><li><div>" + headline.title + " " + headline.article + " " + headline.imageLink + "</div></li></ul>");
};
testReturnOneHTML();

function testReturnMultipleHTML() {
  var headlineList = new HeadlineList;
  var headline = new Headline("The Title", "The Article", "The Image Link");
  var headline1 = new Headline("The Second Title", "The Second Article", "The Second Image Link");
  headlineList.createAndStore(headline);
  headlineList.createAndStore(headline1);
  var headlineView = new HeadlineView(headlineList);
  assert.isTrue(headlineView.returnHTML() === "<ul><li><div>" + headline.title + " " + headline.article + " " + headline.imageLink + "</div></li><li><div>" + headline1.title + " " + headline1.article + " " + headline1.imageLink + "</div></li></ul>");
};
testReturnMultipleHTML();

function testReturnNoHTML() {
  var headlineList = new HeadlineList;
  var headlineView = new HeadlineView(headlineList);
  assert.isTrue(headlineView.returnHTML() === "<ul></ul>");
};
testReturnNoHTML();
