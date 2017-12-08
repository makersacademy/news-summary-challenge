(function(exports){

var article = new Article(headline, summary, inDepth, image)

  function testHeadline() {
    var article = new Article(headline);
    var describe = 'article should have headline'
    assert.isTrue(describe, article.headline() === headline);
  };

  function testSummary() {
    var article = new Article(summary);
    var describe = 'article should have headline'
    assert.isTrue(describe, article.headline() === summary);
  };

  function testInDepth() {
    var article = new Article(inDepth);
    var describe = 'article should have headline'
    assert.isTrue(describe, article.headline() === inDepth);
  };

  function testImage() {
    var article = new Article(image);
    var describe = 'article should have headline'
    assert.isTrue(describe, article.headline() === image);
  };

}

testHeadline();
testSummary();
testInDepth();
testImage();
