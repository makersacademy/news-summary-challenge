
var article = new Article('id', 'headline', 'summary', 'url', 'thumbnail')

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

  function testUrl() {
    var describe = 'article should have url'
    assert.isTrue(describe, article.url() === 'url');
  };

  function testThumbnail() {
    var describe = 'article should have thumbnail'
    assert.isTrue(describe, article.thumbnail() === 'thumbnail');
  };

testHeadline();
testSummary();
testUrl();
testThumbnail();
testId();
