
var article = new Article('id', 'headline', 'summary', 'inDepth', 'image')

  function testId() {
    var describe = 'article should have id'
    assert.isTrue(describe, article.id() === 'id');
  };

  function testHeadline() {
    var describe = 'article should have headline'
    assert.isTrue(describe, article.headline() === 'headline');
  };

  function testSummary() {
    var describe = 'article should have summary'
    assert.isTrue(describe, article.summary() === 'summary');
  };

  function testInDepth() {
    var describe = 'article should have inDepth'
    assert.isTrue(describe, article.inDepth() === 'inDepth');
  };

  function testImage() {
    var describe = 'article should have image'
    assert.isTrue(describe, article.image() === 'image');
  };

this.testHeadline();
this.testSummary();
testInDepth();
testImage();
testId();
