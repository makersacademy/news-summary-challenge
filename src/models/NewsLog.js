(function(exports){

  var NewsLog = function(){
    this.articles = []
  }

  NewsLog.prototype.returnArticles = function(){
    return this.articles
  }

  NewsLog.prototype.addArticles = function(data, self = this){
    data.response.results.forEach(function(result){
      self.articles.push(result.webTitle)
    })
  }

  NewsLog.prototype.getArticles = function(HttpRequest = new XMLHttpRequest){
    var xhttp = HttpRequest
    var self = this
    xhttp.onreadystatechange = function(){
      if (xhttp.readyState == 4 && xhttp.status === 200) {
          var data = JSON.parse(xhttp.responseText)
          self.addArticles(data, self)
      }
    }
    xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search", true)
    xhttp.send()
  }

  exports.NewsLog = NewsLog
})(this)
