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

  displayNewsFromApi() {
    this.newsClient.loadNews((data) => {
      const results = data.response.results;
      const stories = results.map((article) => {
        const { webUrl } = article;
        const { headline, thumbnail, standfirst } = article.fields;
        return { webUrl, headline, thumbnail, standfirst };
      });
      this.newsModel.setNews(stories);
      this.displayNews();
    });
  }
}

module.exports = NewsView;
