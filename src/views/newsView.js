class NewsView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
    this.searchInputEl = document.querySelector('#search-input');
    this.searchButtonEl = document.querySelector('#search-button');

    // this.api.loadNews('latest', (headlines) => {
    //   this.model.addNews(headlines);
    //   this.view.displayNews();
    // });

    this.searchButtonEl.addEventListener('click', () => {
      this.api.loadNews(this.searchInputEl.value, (headlines) => {
        this.model.addNews(headlines);
        this.searchInputEl.value = '';
        this.displayNews();
      });
    });
  }

  displayNews() {
    document.querySelectorAll('.headline').forEach((element) => {
      element.remove();
    });

    const headlines = this.model.getNews();

    console.log(headlines); // <- for dev tools

    headlines.forEach((headline) => {
      const headlineEl = document.createElement('a');
      headlineEl.className = 'headline';
      headlineEl.href = headline.webUrl;

      const imgDivEl = document.createElement('div');

      const imgEl = document.createElement('img');
      imgEl.className = 'left';
      imgEl.src = headline.fields.thumbnail;

      imgDivEl.append(imgEl);
      headlineEl.append(imgDivEl);

      const articleDivEl = document.createElement('div');
      articleDivEl.className = 'right';

      const articleEl = document.createElement('p');
      articleEl.innerText = headline.webTitle;

      articleDivEl.append(articleEl);
      headlineEl.append(articleDivEl);

      this.mainContainerEl.append(headlineEl);
    });
  }
}

module.exports = NewsView;
