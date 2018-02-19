(function(exports){

  var newsLog
  var summaryrequest
  var newsview

  function newsLog(){
    return newslog
  }

  function summaryRequest(){
    return summaryrequest
  }

  function newsView(){
    return newsview
  }

  function showSelectedSummary(){
    window.addEventListener("hashchange", findSummaryUrl)
  }

  function findSummaryUrl(){
    requestSummary(findIndex(window.location))
  }

  function findIndex(location){
    return location.hash.split("#")[1];
  }

  function requestSummary(index){
    var articleUrl = newslog.articles[index].url
    summaryrequest = new ArticleSummaryRequest(articleUrl)
    summaryrequest.requestSummary(newsView().displayArticleSummary)
  }

  function onLoad(){
    newslog = new NewsLog()
    newsview = new NewsHeadlinesView(newsLog())
    newslog.getArticles(newsView().displayHeadLines)
    showSelectedSummary()
  }

  exports.onLoad = onLoad
  exports.summaryRequest = summaryRequest

})(this);
