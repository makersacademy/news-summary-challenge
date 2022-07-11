class NewsView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.newsFeedEl = document.querySelector('#news-feed');
    this.searchButton = document.querySelector('#search-button')
    this.searchButton.addEventListener('click', () => {
      const searchInput = document.querySelector('#search-input')
      this.filterNews(searchInput.value);
      searchInput.value = ""
    })
    this.resetButton = document.querySelector('#reset-button')
    this.resetButton.addEventListener('click', () => {
      this._clearNews()
      this.displayNewsFromApi();
    })
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
    }, () => {
      this.displayError();
    })
  }

  displayError() {
    const div = document.createElement('div');
    div.className = 'error';
    div.innerText = 'Guardian servers are down, please try again later';
    this.newsFeedEl.append(div)
  }

  filterNews(input) {
    this._clearNews()
    this.model.filter(input)
    this.displayNews();
  }

  _clearNews() {
    const images = document.querySelectorAll('img.news-image');
    images.forEach(element => {
      element.remove();
    })
    const headlines = document.querySelectorAll('div.news-title');
    headlines.forEach(element => {
      element.remove();
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