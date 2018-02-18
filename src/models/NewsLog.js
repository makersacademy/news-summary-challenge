(function(exports){

  var NewsLog = function(){
    this.articles = [];
  }

  NewsLog.prototype.returnArticles = function(){
    return this.articles
  }

  NewsLog.prototype._addArticles = function(data, self = this){
    data.response.results.forEach(function(result){
      self.articles.push({ headline: result.webTitle, url: result.webUrl })
    })
  }

  NewsLog.prototype.getArticles = function(callback, HttpRequest = new XMLHttpRequest){
    var xhttp = HttpRequest
    var self = this
    xhttp.onreadystatechange = function(){
      if (xhttp.readyState == 4 && xhttp.status === 200) {
          var data = JSON.parse(xhttp.responseText)
          self._addArticles(data, self)
          callback()
      }
    }
    xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search", true)
    xhttp.send()
  }

  exports.NewsLog = NewsLog
})(this)
