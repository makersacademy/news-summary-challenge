class NewsView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNews() {
    const headlines = this.model.getNews();

    console.log(headlines);

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
