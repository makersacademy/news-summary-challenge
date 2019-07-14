(function testHeadlineState () {
  var headline = 'test headline'
  var headlineID = 1
  var headlineLink = 'http://www.testlink.com'
  var picLink = 'http://www.testpic.com'
  var article = new Headline(headline, headlineLink, picLink)
  var testName = 'test that the headline can return its state'

  assert.isTrue(true, testName)
  assert.isTrue(article.getLink() === headlineLink, 'article link')
  assert.isTrue(article.getHeadline() === headline, 'headline')
  assert.isTrue(article.getId() === headlineID, 'ID')
  assert.isTrue(article.getPicLink() === picLink, 'pic link')
})();
