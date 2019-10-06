function NewsAggregator() {
  API = new APICaller;
  allNews = [];

  NewsAggregator.prototype.displayAllNewsArray = function () {
    return allNews;
  }

  NewsAggregator.prototype.getAllArticles = function () {

    API.fetchTodayData();

    setTimeout(function () {
      API.fetchSummariesFromAylien();
    }, 670);

    setTimeout(function () {

      // change 1 to 10 when done testing...
      for (let i = 0; i < 1; i++) {
        allNews.push(
          (new NewsTagGenerator(
            API.retrieveHeadline(i),
            API.retrieveFullArticle(i),
            API.retrieveArticleSummary(i),
            API.retrieveImage(i)
          ))
        );
      }
      console.log(allNews)
    }, 2800)
  };

  NewsAggregator.prototype.displaySummaryArticles = function () {
    for (let i = 0; i < 1; i++) {
      var headlines = document.getElementById('headlines-list');
      var newsitemcontainer = document.createElement('div')
      newsitemcontainer.setAttribute('id', `news-container`)
      newsitemcontainer.appendChild(allNews[i].generateLink(i));
      newsitemcontainer.appendChild(allNews[i].generateImageTag());
      newsitemcontainer.appendChild(allNews[i].generateArticleSummary());
      headlines.appendChild(newsitemcontainer);
    }
    return headlines
  };

  NewsAggregator.prototype.displayFullArticle = function (index) {
    document.getElementById('full-headline').textContent = (allNews[index].generateHeadline());
    document.getElementById('full-image').setAttribute('src', allNews[index].generateImage());
    document.getElementById('full-article').textContent = (allNews[index].generateFullArticle());
  };

}