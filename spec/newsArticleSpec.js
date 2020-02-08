(function(exports) {
  var headline = 'Breaking News: Florida Man Arrested For Trying To Kill Ex-Lover of His Pet Alligator'
  var article = new NewsArticle(headline)
  function testNewsText() {
    console.log('testNewsText')
    expect(article.headline).toEqual(headline)
  }

  testNewsText()
})(this)
