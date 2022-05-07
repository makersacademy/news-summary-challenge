class newsView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    this.mainContainerEl = document.querySelector('#main-container');
    this.searchFieldEl = document.querySelector('#search-field');
    this.searchButtonEl = document.querySelector('#search-button');

    this.searchButtonEl.addEventListener('click', () => {
      let query = this.searchFieldEl.value
      this.api.fetchNews(query, (data) => {
        this.model.setNews(data);
        this.displayNews();
      })
    })
  }

  displayNews() {
    const oldNews = document.querySelectorAll('div.news');
    oldNews.forEach((article) => {
      article.remove();
    })

    const news = this.model.getNews();

    news.forEach((article) => {
      const newsEl = document.createElement('div');
      newsEl.className = 'news';

      const imgEl = document.createElement('img');
      imgEl.className = 'image';
      imgEl.src = article.fields.thumbnail

      const hrefEl = document.createElement('a');
      hrefEl.innerText = article.webTitle;
      hrefEl.href = article.webUrl;

      newsEl.append(hrefEl);
      newsEl.append(imgEl);
 
      this.mainContainerEl.append(newsEl);
    })
  }

  displayNewsFromApi() {
    this.api.fetchNews('',(data) => {
      this.model.setNews(data);
      this.displayNews();
    })
  }

}

module.exports = newsView;
