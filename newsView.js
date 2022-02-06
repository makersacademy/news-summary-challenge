class NewsView {
  constructor(newsModel, newsApi) {
    this.newsModel = newsModel;
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#search-button');

    this.buttonEl.addEventListener('click', () => {
      const searchTerm = document.querySelector('#search-input').value;
      console.log(searchTerm);
      newsApi.getNews(searchTerm, (headlines) => {
        console.log(headlines);
        newsModel.addHeadlines(headlines);
        newsModel.addLinks(headlines);
        newsModel.addImages(headlines);
        this.displayNews();
      });
    });
  }

  displayNews() {
    this.newsModel.reset;
    const headlines = this.newsModel.getHeadlines();
    const links = this.newsModel.getLinks();
    const images = this.newsModel.getImages();

    headlines.forEach(headline => {
      const newsEl = document.createElement('div');
      const index = headlines.indexOf(headline);
      const a = document.createElement('a');
      const linkText = document.createTextNode(headline);
      const img = document.createElement('img');
      const lineBreak = document.createElement('br');
      const padding = document.createElement('div');

      a.appendChild(linkText);
      a.title = headline;
      a.href = links[index];
      
      img.src = images[index];
      img.className = 'image';
      
      newsEl.appendChild(a);
      newsEl.append(lineBreak);
      newsEl.appendChild(img);
      newsEl.className = 'headline';

      padding.className = 'padding';

      this.mainContainerEl.append(newsEl);
      this.mainContainerEl.append(padding);
    });
  }
}

module.exports = NewsView;