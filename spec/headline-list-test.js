function testReturnHeadlineList() {
  var headlineList = new HeadlineList;
  assert.isTrue(headlineList.returnList() === headlineList.array);
};
testReturnHeadlineList();

function testHeadlineListStartssEmpty() {
  var headlineList = new HeadlineList;
  assert.isTrue(headlineList.array.length === 0);
};
testHeadlineListStartssEmpty();

function testCreateAndStoreHeadline() {
  var headlineList = new HeadlineList;
  var headline = new Headline("The Title", "The Article", "The Image Link" );
  headlineList.createAndStore(headline);
  assert.isTrue(headlineList.array.length === 1);
  assert.isTrue(headlineList.returnList()[0].title === "The Title");
  assert.isTrue(headlineList.returnList()[0].article === "The Article");
  assert.isTrue(headlineList.returnList()[0].imageLink === "The Image Link");
};
testCreateAndStoreHeadline();
