class NewsModel {
  constructor() {
    this.allNews = [];
    this.searchedNews = [];
  }

  getNews() {
    return this.allNews;
  }

  getSearchedNews(searchCriteria) {
    this.allNews.forEach((story) => {
      if (story.webTitle.includes(searchCriteria)) {
        this.searchedNews.push(story);
      }
    });
    return this.searchedNews;
  }

  setNews(news) {
    this.allNews = news.response.results;
  }
}

module.exports = NewsModel;
