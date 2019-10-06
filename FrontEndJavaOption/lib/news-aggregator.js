function NewsAggregator() {
  API = new APICaller;
  allNews = [];

  NewsAggregator.prototype.getAllArticles = function() {

    API.fetchTodayData();

    setTimeout(function() {
      API.fetchSummariesFromAylien();
    }, 670);

    setTimeout(function () {
      
      // change 1 to 10 when done testing...
      for (let i = 0; i < 1; i++) {
        allNews.push(
          (new NewsTagGenerator(
            API.retrieveHeadline(i),
            API.retrieveArticleSummary(i),
            API.retrieveImage(i)
          ))
        );
      }
          allNews.forEach(function(element) {
      element._headline = element._headline.webTitle,
      element._articlebody = element._articlebody.sentences[0] + " " + element._articlebody.sentences[1],
      element._imageurl = element._imageurl.image;
          });
          console.log(allNews)
    }, 2800)
  };

  NewsAggregator.prototype.displayArticles = function (index) {
    

  }


}