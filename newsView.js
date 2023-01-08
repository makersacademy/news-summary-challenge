class NewsView {

  constructor(model, client) {
    this.model = model;
    this.client = client;

    this.mainContainerEl = document.querySelector('#main-container');
    this.headline = null;

    document.querySelector('#search-button').addEventListener('click', () => {
      const keyWord = document.querySelector('#keyword-input').value;
      
      this.displayNewsFromSearch(keyWord);

      document.querySelector('#keyword-input').value = "";
    })

  }

  displayFrontPage() {
    document.querySelectorAll('.headline').forEach(element => {
      element.remove();
    });
    
    const allNews = this.model.getNews();

    allNews.forEach((item, i) => {
      const headline = document.createElement('div');
      this.headline = headline;

      headline.className = 'headline';

      const image = document.createElement('img');
      const a = document.createElement('a');

      this.displayThumbnail(image, item);

      this.createNewLine();

      a.setAttribute('href', allNews[i].webUrl);
      a.innerText = allNews[i].webTitle;
      a.className = 'link';
      headline.append(a);

      this.mainContainerEl.append(headline);
    });
  }

  displayThumbnail(image, item) {
    image.src = item.fields.thumbnail;
    this.headline.append(image);
    image.className = 'thumbnail';
  }

  createNewLine() {
    const space = document.createElement('div');
    space.className = 'space';
    this.headline.append(space);
  }

  displayNewsFromApi() {
    this.client.loadNews((newsFromApi) => {
      this.model.addNews(newsFromApi);
      this.displayFrontPage();
      console.log(this.model.getNews())
    });
  }

  displayNewsFromSearch(keyWord) {
    this.client.searchQueryResults(keyWord, (newsFromApi) => {
      this.model.addNews(newsFromApi);
      this.displayFrontPage();
      console.log(this.model.getNews())
    });
  }
}

module.exports = NewsView;