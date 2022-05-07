class newsView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNews() {
    const oldNews = document.querySelectorAll('div.news');
    oldNews.forEach((article) => {
      article.remove();
    })

    const news = this.model.getNews();

    news.forEach((article) => {
      const newsEl = document.createElement('div');
      newsEl.innerText = article.webTitle;
      newsEl.className = 'news';

      const imgEl = document.createElement('img');
      imgEl.className = 'image';
      imgEl.src = article.fields.thumbnail

      newsEl.append(imgEl);

      this.mainContainerEl.append(newsEl);
    })
  }

  displayNewsFromApi() {
    this.api.fetchNews((data) => {
      this.model.setNews(data);
      this.displayNews();
    })
  }

}

module.exports = newsView;
