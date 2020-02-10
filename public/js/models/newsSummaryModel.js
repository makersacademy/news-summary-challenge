(function(exports) {
  function NewsSummary(article, apiData = new APIData('newsSummary'), apiRequestUrl) {
    this.article = article
    this.details = {
      id: this.article.id,
      headline: this.article.headline,
      image: this.article.image,
      apiURL: this.article.apiURL,
      URL: this.article.URL,
      summary: ""
    }
    this.apiRequestUrl = apiRequestUrl
    this.apiData = apiData
    var self = this
    setTimeout(function() {
      self.setAPIRequestURL()
    }, 2000)
    
  }

  NewsSummary.prototype = {
    viewSummary: function() {
      return this.details.summary
    },
    setAPIRequestURL: function() {
      if (this.apiRequestURL === undefined) {
        this.apiRequestUrl = `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${this.article.apiURL}`
      }
    },
    getSummaryAPIData: function() {
      this.apiData.getRequest(this.apiRequestUrl)
        var sentencesList = this.apiData.sentences
        this.details.summary = `${sentencesList[0]}<br><br>${sentencesList[1]}`
    },
 
  }

  exports.NewsSummary = NewsSummary
})(this)