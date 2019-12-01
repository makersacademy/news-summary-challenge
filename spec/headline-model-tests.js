function testHeadlineReturnsTitle() {
  var headline = new Headline("English man does a shop", "He was in tesco, buying a meal deal no less", "Link to Image" );
  eval.isTrue(headline.title === "English man does a shop");
};
testHeadlineReturnsTitle();

function testHeadlineReturnsArticle() {
  var headline = new Headline("English man does a shop", "He was in tesco, buying a meal deal no less", "Link to Image" );
  eval.isTrue(headline.article === "He was in tesco, buying a meal deal no less");
};
testHeadlineReturnsArticle();

function testHeadlineReturnsImageLink() {
  var headline = new Headline("English man does a shop", "He was in tesco, buying a meal deal no less", "Link to Image" );
  eval.isTrue(headline.image === "Link to Image");
};
testHeadlineReturnsImageLink();
