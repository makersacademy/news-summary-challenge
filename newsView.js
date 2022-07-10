class NewsView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.newsFeedEl = document.querySelector('#news-feed');
  }

  displayNews() {
    const news = this.model.getNews();
    news.forEach(item => {
      this._addImage(item)
      this._addHeadline(item)
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

  _addImage(item) {
    const img = document.createElement('img');
    img.className = 'news-image';
    img.setAttribute('id', item.id);
    img.src = item.fields.thumbnail;
    img.addEventListener('click', () => {
      window.location.href = item.webUrl
    })
    this.newsFeedEl.append(img)
  }

  _addHeadline(item) {
    const div = document.createElement('div');
    div.className = 'news-title';
    div.innerText = item.webTitle;
    this.newsFeedEl.append(div)
  }
}

module.exports = NewsView;