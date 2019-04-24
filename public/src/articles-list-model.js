(function(exports) {
  
  function ArticlesList() {
    this.listArray = []
    that = this
    var apiKey = "Replace with api key in .env"
    var request = new XMLHttpRequest()
    request.open('GET', `https://content.guardianapis.com/search?q=cycling&api-key=${apiKey}`, true)
    request.onload = function() {
      var data = JSON.parse(this.response)
      for (var i = 0; i < data.response.results.length; i++) {
        that.listArray.push(data.response.results[i]);
      }
    }
    request.send()
  }

  exports.ArticlesList = ArticlesList
})(this)
