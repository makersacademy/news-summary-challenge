class NewsView {

  constructor(model, api) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
      
    this.inputEl = document.querySelector("#inputEl");
    this.btnEl = document.querySelector("#btnEl")

    this.btnEl.addEventListener('click', () => {
      const userSearch = this.inputEl.value;
      console.log(userSearch)

      api.searchHeadlines(userSearch, data => {
        this.model.setHeadlines(data);
        this.displayHeadlines(data);
      })
    })
  }

  displayHeadlines(data) {

    const newArticles = []

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

      const bodyEl = document.createElement('div');
      bodyEl.className = "article-body";
      bodyEl.innerText = headline.fields.body.replace(/(<([^>]+)>)/ig, '').slice(0, 133) + '...';
      
      headlineEl.append(imgEl);
      headlineEl.append(hrefEl);
      headlineEl.append(bodyEl);
      
      
      newArticles.push(headlineEl)
    });
    this.mainContainerEl.replaceChildren(...newArticles);
  }
}

module.exports = NewsView;

