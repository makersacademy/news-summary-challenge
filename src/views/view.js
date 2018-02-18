(function(exports){
  var NewsSummaryView = function(newslog){
    this.newslog = newslog;
  }

  NewsSummaryView.prototype.displayHeadLines = function(){
    this.newslog().articles.forEach(function(article){
      var node = document.createElement('LI')
      var headline = document.createTextNode(article)
      node.appendChild(headline)
      document.getElementById("headlines").appendChild(node)
    })
  }

  exports.NewsSummaryView = NewsSummaryView

})(this)
