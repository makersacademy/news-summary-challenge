class NewsView {
  constructor(newsModel, newsApi) {
    this.newsModel = newsModel;
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#search-button');
    this.inputEl = document.querySelector('#search-input');
    this.inputEl.value = '';

    this.buttonEl.addEventListener('click', () => {
      const searchTerm = document.querySelector('#search-input').value;

      newsApi.getNews(searchTerm, (headlines) => {
        newsModel.reset();
        newsModel.addInfo(headlines);
        this.displayNews();
      });
    });
  }

  displayNews() {
    const headlines = this.newsModel.getHeadlines();
    const links = this.newsModel.getLinks();
    const images = this.newsModel.getImages();
    const articlesArray = [];

    headlines.forEach(headline => {
      const newsEl = document.createElement('div');
      const index = headlines.indexOf(headline);
      const a = document.createElement('a');
      const linkText = document.createTextNode(headline);
      const img = document.createElement('img');
      const lineBreak = document.createElement('br');
      
      newsEl.className = 'headline';
      
      a.appendChild(linkText);
      a.title = headline;
      a.href = links[index];
      
      img.src = images[index];
      img.className = 'image';
      
      newsEl.appendChild(a);
      newsEl.append(lineBreak);
      newsEl.appendChild(img);

      articlesArray.push(newsEl);
    });
    this.mainContainerEl.replaceChildren(...articlesArray);
  };
}

module.exports = NewsView;