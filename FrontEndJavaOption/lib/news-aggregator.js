function NewsAggregator() {
  API = new APICaller;
  allNews = [];

  NewsAggregator.prototype.getAllArticles = function() {

    API.fetchTodayData();

    setTimeout(function() {
      API.fetchSummariesFromAylien();
    }, 670);

    setTimeout(function () {
      
      for (let i = 0; i < 10; i++) {
        allNews.push(
          (new NewsTagGenerator(
            API.retrieveHeadline(i),
            API.retrieveArticleSummary(i),
            API.retrieveImage(i)
          ))
        );
      }
    }, 1400)
  }

  NewsAggregator.prototype.displayArticles = function (index) {
    

  }


}