class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('#main-container');
    
    // this.displayNewsFromApi();
  }

  displayNews() {
    const news = this.model.allNews();
    console.log(news)
    news.forEach(news => {
      console.log(news)
      const newsElement = document.createElement('div');
      newsElement.textContent = news.webTitle;
      newsElement.className = 'news';
      this.mainContainerEl.append(newsElement);
    })
  }

  displayNewsFromApi() {
    this.client.loadData((data) => {
      this.model.addNews(data);
      this.model.allNews();
      this.displayNews();
    })
  }
}

module.exports = NewsView;