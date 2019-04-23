(function(exports) {
  
  function ArticlesList() {
    this.listArray = []
    that = this
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

  ArticlesList.prototype.returnList = function() {
    return listArray
  }

  exports.ArticlesList = ArticlesList
})(this)
