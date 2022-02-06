class NewsView {

  constructor(model, api) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
      
    this.inputEl = document.querySelector("#inputEl");
    this.btnEl = document.querySelector("#btnEl")

    this.btnEl.addEventListener('click', () => {
      const userSearch = this.inputEl.value;
      console.log(userSearch)
      this.inputEl.value = ''

      api.searchHeadlines(userSearch, data => {
        this.model.setHeadlines(data);
        this.displayHeadlines(data);
      })
    })
  }

  displayHeadlines(data) {

    const newsArticles = []

    data.forEach(headline => {

      const headlineEl = document.createElement('div');
      headlineEl.className = 'headline';

      const hrefEl = document.createElement('a');
      hrefEl.className = 'article-link';
      hrefEl.href = headline.webUrl;
      hrefEl.innerText = headline.webTitle;

      const imgEl = document.createElement('img');
      imgEl.className = 'article-img';
      imgEl.src = headline.fields.thumbnail;
      
      headlineEl.append(imgEl);
      headlineEl.append(hrefEl);
      
      newsArticles.push(headlineEl)
    });
    this.mainContainerEl.replaceChildren(...newsArticles);
  }
}

module.exports = NewsView;

