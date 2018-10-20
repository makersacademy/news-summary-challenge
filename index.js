var newsManager

APIQuery(function (json) {
  newsManager = new NewsManager(json)  
  let headlines = newsManager.extractHeadlines()
  let formattedHeadlines = NewsFormatter.createArticleList(headlines)
  document.getElementById("news-overview").innerHTML = formattedHeadlines
}) 