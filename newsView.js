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

  #createNewsElement(story) {
    const newsEl = document.createElement('div');
    const lineBreak = document.createElement('br');
      
    newsEl.className = 'headline';
      
    const img = this.#createArticleImageElement(story);
    const a = this.#createArticleLinkElement(story);
      
    newsEl.appendChild(a);
    newsEl.append(lineBreak);
    newsEl.appendChild(img);

    return newsEl;
  };

  #createArticleImageElement(story) {
    const img = document.createElement('img');

    img.src = story.image;
    img.className = 'image';

    return img;
  }

  #createArticleLinkElement(story) {
    const a = document.createElement('a');
    const linkText = document.createTextNode(story.headline);

    a.appendChild(linkText);
    a.title = story.headline;
    a.href = story.link;

    return a;
  }

  displayNews() {
    const news = this.newsModel.getNews();
    const articlesArray = [];

    news.forEach(story => {
      const newsEl = this.#createNewsElement(story);

      articlesArray.push(newsEl);
    });
    this.mainContainerEl.replaceChildren(...articlesArray);
  };
}

module.exports = NewsView;