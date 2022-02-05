class NewsView {

  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayHeadlines(data) {
    // let headlines = this.model.getHeadlines();

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
      
      this.mainContainerEl.append(headlineEl);
    
    });
  
  }
}

module.exports = NewsView;

