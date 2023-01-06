class NewsView {

  constructor(model, client) {
    this.model = model;
    this.client = client;

    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayFrontPage() {
    // document.querySelectorAll('.headline').forEach(element => {
    //   element.remove();
    // });
    
    const allNews = this.model.getNews();

    allNews.forEach(item => {
      const headline = document.createElement('div');
      const image = document.createElement('img');
      headline.textContent = item.webTitle;
      headline.className = 'headline';
      image.src = item.fields.thumbnail;
      image.className = 'thumbnail';
      this.mainContainerEl.append(headline);
      this.mainContainerEl.append(image);
    });
  }

  addNewsFromApi() {
    this.client.loadNews((newsFromApi) => {
      this.model.addNews(newsFromApi);
      this.displayFrontPage();
      console.log(this.model.getNews())
    })
  }
}

module.exports = NewsView;