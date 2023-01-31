class NewsView {
  constructor(newsModel, newsClient) {
    this.newsModel = newsModel;
    this.newsClient = newsClient;
    this.mainContainer = document.querySelector('#main-container');
  }

  displayNews() {
    const news = this.newsModel.getNews();

    news.forEach((article) => {
      const newsElement = document.createElement('div');
      newsElement.className = 'news';
      newsElement.textContent = article;
      this.mainContainer.append(newsElement);
    });
  }
}

module.exports = NewsView;
