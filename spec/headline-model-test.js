function testHeadlineReturnsTitle() {
  var headline = new Headline("The Title", "The Article", "The Image Link" );
  assert.isTrue(headline.title === "The Title");
};
testHeadlineReturnsTitle();

function testHeadlineReturnsArticle() {
  var headline = new Headline("The Title", "The Article", "The Image Link" );
  assert.isTrue(headline.article === "The Article");
};
testHeadlineReturnsArticle();

function testHeadlineReturnsImageLink() {
  var headline = new Headline("The Title", "The Article", "The Image Link" );
  assert.isTrue(headline.imageLink === "The Image Link");
};
testHeadlineReturnsImageLink();
