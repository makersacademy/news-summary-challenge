function testReturnHeadlineList() {
  var headlineList = new HeadlineList;
  eval.isTrue(headlineList.returnList() === headlineList.array);
};
testReturnHeadlineList();

function testHeadlineListEmpty() {
  var headlineList = new HeadlineList;
  eval.isTrue(headlineList.array.length === 0);
};
testHeadlineListEmpty();

function testaddHeadline() {
  var headlineList = new HeadlineList;
  var headline = new Headline("The Title", "The Article", "The Image Link" );
  headlineList.addHeadline(headline);
  eval.isTrue(headlineList.returnList()[0].title === "The Title");
  eval.isTrue(headlineList.returnList()[0].article === "The Article");
  eval.isTrue(headlineList.returnList()[0].image === "The Image Link");
};
testaddHeadline();
