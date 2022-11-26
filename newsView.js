// file: newsView.js

class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    this.searchInput = document.querySelector('#text-input');
    this.searchSubmit = document.querySelector('#text-submit');
    this.list = document.querySelector('#list');

    document.addEventListener('DOMContentLoaded', () => {
      this.client.loadNews('politics', (data) => this.displayNews(data));
    });

    this.searchSubmit.addEventListener('click', () => {
      const searchTerm = this.searchInput.value;
      const listItems = document.querySelectorAll('.list__item');
      listItems.forEach((item) => item.remove());
      this.client.loadNews(searchTerm, (data) => this.displayNews(data));
      this.searchInput.value = '';
    });
  }

  displayNews(allData) {
    const filtered = this.#filterData(allData);
    this.model.setNews(filtered);
    const info = this.model.getNews();
    info.forEach((item) => {
      this.list.append(this.#createListItem(item));
    });
  }

  #filterData(data) {
    const results = data.response.results;
    const info = results.map((article) => {
      const { webUrl } = article;
      const { headline, thumbnail } = article.fields;
      return { thumbnail, headline, webUrl };
    });
    return info;
  }

  #createListItem = (info) => {
    const { thumbnail, headline, webUrl } = info;
    const li = document.createElement('LI');
    const html = `<a class="item__link" href="${webUrl}" ><img class="item__thumbnail" src=${thumbnail}></a><p class="item__heading">${headline}</p>`;
    li.className = 'list__item';
    li.innerHTML = html;
    return li;
  };
}

module.exports = NewsView;
