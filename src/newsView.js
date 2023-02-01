class NewsView {
  constructor(newsModel, newsClient) {
    this.newsModel = newsModel;
    this.newsClient = newsClient;
    this.mainContainer = document.querySelector('#main-container');
  }

  displayNews() {
    const news = this.newsModel.getNews();

    news.forEach((article) => {
      const { thumbnail, headline, webUrl } = article;
      const newsItem = document.createElement('LI');
      const html = `<a class="news_link" href="${webUrl}" ><img class="thumbnail" src=${thumbnail}></a><a href="${webUrl}" ><p class="news_headline">${headline}</p></a>`;
      newsItem.className = 'news';
      newsItem.innerHTML = html;
      this.mainContainer.append(newsItem);
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
