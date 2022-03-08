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
        newsModel.addNews(headlines);
        this.displayNews();
      });
    });
  }

  displayNews() {
    const news = this.newsModel.getNews();
    const articlesArray = [];

    news.forEach(story => {
      const newsEl = document.createElement('div');
      const a = document.createElement('a');
      const linkText = document.createTextNode(story.headline);
      const img = document.createElement('img');
      const lineBreak = document.createElement('br');
      
      newsEl.className = 'headline';
      
      a.appendChild(linkText);
      a.title = story.headline;
      a.href = story.link;
      
      img.src = story.image;
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