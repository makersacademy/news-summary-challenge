function NewsAggregator() {
  API = new APICaller();
  allNews = [];

  NewsAggregator.prototype.getAllArticles = function () {

    data = API.fetchTodayData();
    setTimeout(function () {
      for (let i = 0; i < 10; i++) {
        allNews.push(
          (new NewsTagGenerator(
            API.retrieveHeadline(i),
            API.retrieveArticleSummary(i),
            API.retrieveImageTag(i)
          ))
        );
      }
    }, 1000)
    console.log(data)
    console.log(allNews)
    return allNews
  }

  NewsAggregator.prototype.displayArticles = function (index) {

  }




}