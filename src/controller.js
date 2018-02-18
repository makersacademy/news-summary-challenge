(function(exports){

  var instanceOfNewsLog;

  function newslog(){
    return instanceOfNewsLog;
  }

  function onLoad(){
    instanceOfNewsLog = new NewsLog
    newsView = new NewsSummaryView(instanceOfNewsLog)
    newslog().getArticles(newsView.displayHeadLines)
  }

  exports.newslog = newslog
  exports.onLoad = onLoad
})(this);
