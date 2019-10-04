function NewsAggregator() {
  this._API = new APICaller();
  this._allNews = [];

  NewsAggregator.prototype.getAllArticles = function () {
    this._API.fetchTodayData();
    for (i = 0; i < 10; i++) {
      this._allNews.push(
        new NewsTagGenerator(
          this._API.generateHeadline(i),
          this._API.generateArticleBody(i),
          this._API.generateImageTag(i)
        )
      );
    }
  }




}