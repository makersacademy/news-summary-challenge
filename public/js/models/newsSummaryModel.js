(function(exports) {
  function NewsSummary(article) {
    this.test = true
    this.article = article
    this.details = {
      id: this.article.id,
      headline: this.article.headline,
      image: this.article.image,
      apiURL: this.article.apiURL,
      summary: ""
    }
  }

  NewsSummary.prototype = {
    viewSummary: function() {
      return this.details.summary
    },
    getSummaryAPIData: function() {
      if (this.test === false) {
        var self = this
        var request = new XMLHttpRequest()
        var apiRequestURL = `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${this.article.apiURL}`
        request.open('GET', apiRequestURL, true)
        request.onload = function() {
          data = JSON.parse(this.response)
          var sentencesList = data.sentences
          self.details.summary = `${sentencesList[0]}<br><br>${sentencesList[1]}`
        }
        request.send()
        } else {
          this.details.summary = "Beautiful wonderful summary great amazing so many words wow cool"
        }
    },
    
  }

  exports.NewsSummary = NewsSummary
})(this)