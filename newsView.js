class newsView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNews() {
    let news = this.model.getNews();
    news.forEach((headline) => {
      const newsEl = document.createElement('div');
      newsEl.innerText = headline;
      newsEl.className = 'news';
      this.mainContainerEl.append(newsEl);
    })

  }
}

module.exports = newsView;

