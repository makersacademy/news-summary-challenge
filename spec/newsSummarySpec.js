(function(exports) {
  function DoubleAPIData() {
      this.sentences
    }
    DoubleAPIData.prototype.getRequest = function() {
      this.sentences = ['Sentence1', 'Sentence2']
    }

  function DoubleArticle() {
    this.id = 'id',
    this.headline = 'headline',
    this.image = 'image',
    this.apiURL = 'apiURL'
  }
  
  var apiData = new DoubleAPIData()
  var article = new DoubleArticle()

  var newsSummary = new NewsSummary(article, apiData, 'fakeAPIRequestURL')

  newsSummary.getSummaryAPIData()

  function getAPIDataAddsSummary() {
    console.log('getAPIDataAddsSummary')
    expect(newsSummary.details.summary).toNotEqual("")
  }

  function viewSummary() {
    console.log('viewSummary')
    expect(newsSummary.viewSummary()).toInclude(apiData.sentences[0])
  }

  setTimeout(function() {
    getAPIDataAddsSummary()
    viewSummary()
  }, 300)


})(this)