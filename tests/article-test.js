(function testArticleHasAnId () {
  var articleHeadline = 'test headline'
  var articleSummary = 'this is a test summary of the article'
  var articleID = 1
  var articleLink = 'http://www.testlink.com'
  var article = new Article(articleHeadline, articleSummary, articleLink)
  var testName = 'test that the article can return its state'

  assert.isTrue(true, testName)
  assert.isTrue(article.getLink() === articleLink, 'article link')
  assert.isTrue(article.getHeadline() === articleHeadline, 'headline')
  assert.isTrue(article.getSummary() === articleSummary, 'summary')
  assert.isTrue(article.getId() === articleID, 'ID')
})();
