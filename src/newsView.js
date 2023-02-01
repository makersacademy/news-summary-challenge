class NewsView {
  constructor(newsModel, newsClient) {
    this.newsModel = newsModel;
    this.newsClient = newsClient;
    this.mainContainer = document.querySelector('#main-container');
  }

  displayNews() {
    const news = this.newsModel.getNews();

    news.forEach((article) => {
      const newsThumbnail = document.createElement('img');
      newsThumbnail.className = 'news-thumbnail';
      newsThumbnail.src = article.thumbnail;
      const newsElement = document.createElement('a');
      newsElement.className = 'news';
      newsElement.textContent = article.headline;
      newsElement.setAttribute('href', article.webUrl);
      this.mainContainer.append(newsThumbnail, newsElement);
    });
  }
}

module.exports = NewsView;
