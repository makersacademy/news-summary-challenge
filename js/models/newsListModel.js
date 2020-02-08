(function(exports) {
  function NewsList() {
    this.list = []
  }

  NewsList.prototype = {
    // addArticle: function(article) {
    //   this.list.push(new NewsArticle(article, this.list.length))
    // },
    viewAll: function() {
      return this.list
    },
    getAPIData: function() {
      var list = this.list
      var request = new XMLHttpRequest()
      var apiURL = 'http://content.guardianapis.com/search?q=politics&from-date=2020-02-08&api-key=a1d02ea7-ada1-4f93-bf10-906a6eac506f'
      request.open('GET', apiURL, true)
      request.onload = function() {
        var data = JSON.parse(this.response)
        data.response.results.forEach(article => {
          list.push(new NewsArticle(article.webTitle, list.length))
        })
      }
      request.send()
    }

  }

  exports.NewsList = NewsList
})(this)