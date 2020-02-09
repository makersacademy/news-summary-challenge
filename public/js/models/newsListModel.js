(function(exports) {
  function NewsList() {
    this.test = true
    this.list = []
  }

  NewsList.prototype = {
    viewAll: function() {
      return this.list
    },
    getAPIData: function() {
      if (this.test === false) {
        var list = this.list
        var request = new XMLHttpRequest()
        var apiURL = 'http://content.guardianapis.com/search?q=politics&from-date=2020-02-08&api-key=a1d02ea7-ada1-4f93-bf10-906a6eac506f&show-fields=thumbnail,body'
        request.open('GET', apiURL, true)
        request.onload = function() {
          var data = JSON.parse(this.response)
          data.response.results.forEach(article => {
            var headline = article.webTitle
            var image = article.fields.thumbnail
            var body = article.fields.body
            list.push(new NewsArticle(headline, image, body, list.length))
          })
        }
        request.send()
      } else {
        console.log('---')
        var headline = 'Headline 1: Breaking News!'
        var image = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
        var body ='Article Body Lots Of Interesting Stuff Here...'
        this.list.push(new NewsArticle(headline, image, body, this.list.length))
        this.list.push(new NewsArticle(headline, image, body, this.list.length))
      }
    }
    
  }

  exports.NewsList = NewsList
})(this)