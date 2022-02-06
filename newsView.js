class NewsView {
  constructor(newsModel) {
    this.newsModel = newsModel;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNews() {
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

      a.appendChild(linkText);
      a.title = headline;
      a.href = links[index];
      
      img.src = images[index];
      
      newsEl.appendChild(img);
      newsEl.append(lineBreak);
      newsEl.appendChild(a);
      newsEl.className = 'headline';

      this.mainContainerEl.append(newsEl);
    });
  }
}

module.exports = NewsView;