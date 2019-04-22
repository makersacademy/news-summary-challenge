(function(exports) {
  function ArticlesList() {
    this.listArray = [];
    that = this
    var request = new XMLHttpRequest()
    request.open('GET', `https://content.guardianapis.com/search?q=cycling&api-key=${apiKey}`, true)
    request.onload = function() {
      var data = JSON.parse(this.response)
      console.log(data.response.results)
      that.listArray.push(data.response.results)
    }
    request.send()
  }

  ArticlesList.prototype.returnList = function() {
    console.log(this.listArray)
    return this.listArray
  }

  exports.ArticlesList = ArticlesList
})(this)
