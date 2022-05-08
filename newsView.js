class NewsView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
  }
  
  displayNews() {
    const news = this.model.getNews()

    // For each note, create and append a new element on the main container
    news.forEach(news => {
      const newsEl = document.createElement('div');
      newsEl.innerText = news;
      newsEl.className = 'news';
      this.mainContainerEl.append(newsEl);
    })
  }
}

module.exports = NewsView;