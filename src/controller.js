(function(exports){

  var newsLog
  var summaryview
  var summaryrequest

  function newsLog(){
    return newslog
  }

  function summaryView(){
    return summaryview
  }

  function summaryRequest(){
    return summaryrequest
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
    summaryrequest.requestSummary(displayArticleSummary)
  }

  function displayArticleSummary(){
    var summary = summaryRequest().summary
    document.getElementById('summary').innerHTML = summary
  }

  function onLoad(){
    newslog = new NewsLog()
    newsHeadLines = new NewsHeadlinesView(newsLog())
    summaryView = new SummaryView(newsLog())
    newslog.getArticles(newsHeadLines.displayHeadLines)
    showSelectedSummary()
  }

  exports.onLoad = onLoad
  exports.displayArticleSummary = displayArticleSummary

})(this);
