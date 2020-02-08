(function(exports) {
  var newsList = new NewsList()
  newsList.addArticle('Headline 1')
  var headlinesView = new HeadlinesView(newsList)

  function displayHeadlines() {
    console.log('displayHeadlines')
    expect(headlinesView.displayHeadlines()).toEqual('<ul><li><div><a href="#articles/0">Headline 1</a></div></li></ul>')
  }

  displayHeadlines()
})(this)