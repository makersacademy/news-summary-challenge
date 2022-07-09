class NewsView{
  constructor(model) {
    this.model = model;
    this.newsFeedEl = document.querySelector('#news-feed');
  }

  displayNews() {
    const news = this.model.getNews();
    console.log(news)
    news.forEach(item => {
      let div = document.createElement('div')
      div.className = 'news-item';
      div.innerText = item;
      this.newsFeedEl.append(div)
    })
  }
}

module.exports = NewsView;