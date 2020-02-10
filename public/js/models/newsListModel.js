(function(exports) {
  function NewsList(apiData = new APIData('newsList'), apiRequestUrl) {
    this.apiRequestUrl = apiRequestUrl
    this.apiData = apiData
    this.list = []
    var self = this
    setTimeout(function() {
      self.setAPIRequestURL()
    }, 2000)
  }

  NewsList.prototype = {
    viewAll: function() {
      return this.list
    },
    
    getAPIData: function() {
      var self = this
      this.apiData.getRequest(this.apiRequestUrl)
      setTimeout(function() { 
        self.apiData.results.forEach(article => {
          var headline = article.webTitle
          var image = article.fields.thumbnail
          var URL = article.webUrl
          var apiURL = article.apiUrl
          self.list.push(new NewsArticle(headline, image, URL, apiURL, self.list.length))
        })
      }, 150);
    },
    setAPIRequestURL: function() {
      if (this.apiRequestURL === undefined) {
        this.apiRequestUrl = `http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=politics&from-date=2020-02-08&show-fields=thumbnail,body'`
      }
    },
  }

  exports.NewsList = NewsList
})(this)