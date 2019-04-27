(function(exports) {
  
  function ArticlesList() {
    this.listArray = []
    var that = this
    // var apiKey = "Replace with api key in .env"
    var apiKey = "91fa1184-3660-4b00-9e8f-e88868d8d66d"
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
