class NewsView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.newsFeedEl = document.querySelector('#news-feed');
  }

  displayNews() {
    const news = this.model.getNews();
    console.log(news)
    news.forEach(item => {
      let div = document.createElement('div')
      div.className = 'news-title';
      div.innerText = item.webTitle;
      this.newsFeedEl.append(div)
    })
  }

  displayNewsFromApi() {
    this.api.loadData(data => {
      this.model.add(data.response.results);
      this.displayNews();
    // }, () => {
    //   this.displayError();
    })
  }
}

module.exports = NewsView;