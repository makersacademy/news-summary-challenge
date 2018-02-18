(function(exports){
  var NewsHeadlinesView = function(newslog){
    this.newslog = newslog;
  }

  NewsHeadlinesView.prototype.displayHeadLines = function(){
    var index = 0
    this.newslog.articles.forEach(function(article){
      var node = document.createElement('LI')
      var headline = document.createElement('a')
      headline.innerHTML = article.headline
      headline.href = "#" + (index)
      node.appendChild(headline)
      document.getElementById("headlines").appendChild(node)
      index ++
    })
  }

  exports.NewsHeadlinesView = NewsHeadlinesView

})(this)
