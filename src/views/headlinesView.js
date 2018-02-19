(function(exports){

  var NewsHeadlinesView = function(newslog){
    this.newslog = newslog;
  }

  NewsHeadlinesView.prototype.displayHeadLines = function(){
    var index = 0
    this.newslog.articles.forEach(function(article){
      var node = document.createElement('LI')
      var headline = document.createElement('a')
      var headlineExpand = document.createElement('a')
      var br = document.createElement("br");
      headline.innerHTML = article.headline
      headline.href = article.url
      headlineExpand.innerHTML = '  Click for more information'
      headlineExpand.href = "#" + (index)
      node.appendChild(headline).appendChild(br)
      node.appendChild(headlineExpand)
      document.getElementById("headlines").appendChild(node)
      index ++
    })
  }

  NewsHeadlinesView.prototype.displayArticleSummary = function(){
    var summary = summaryRequest().summary
    document.getElementById('summary').innerHTML = summary
  }

  exports.NewsHeadlinesView = NewsHeadlinesView

})(this)
