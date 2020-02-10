(function(exports) {
  var doubleArticle = {
    id: 'id',
    headline: 'headline',
    image: 'image',
    apiURL: 'apiURL',
    summary: 'summary'
  }

  var summaryView = new SummaryView(doubleArticle)

  function displayArticle() {
    console.log('displayArticle')
    expect(summaryView.displayArticle()).toInclude(summaryView.headline)
    expect(summaryView.displayArticle()).toInclude(summaryView.image)
    expect(summaryView.displayArticle()).toInclude(summaryView.summary)
    expect(summaryView.displayArticle()).toInclude(summaryView.URL)  
  }

  displayArticle()

})(this)