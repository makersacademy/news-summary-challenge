(function(exports){

  var ArticleSummaryRequest = function(url){
    this.summary = '';
    this.articleUrl = url
  }

  ArticleSummaryRequest.prototype.requestSummary = function(callback,HttpRequest = new XMLHttpRequest){
    var xhttp = HttpRequest
    var self = this
    xhttp.onreadystatechange = function(){
      if (xhttp.readyState == 4 && xhttp.status === 200) {
          var data = JSON.parse(xhttp.responseText)
          self.summary = data.sentences.join()
          callback()
      }
    }
    xhttp.open("GET", `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${this.articleUrl}`, true)
    xhttp.send()
  }

  exports.ArticleSummaryRequest = ArticleSummaryRequest
})(this)
