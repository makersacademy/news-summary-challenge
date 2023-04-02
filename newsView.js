class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('#main-container');
    
    // this.displayNewsFromApi();
  }

  displayNews() {
    const news = this.model.allNews();
    console.log(news)
    news.forEach(news => {
      console.log(news)
      const newsElement = document.createElement('div');
      newsElement.textContent = news.webTitle;
      newsElement.className = 'news';
      const imgWrapper = document.createElement('div')
      const imageElement = document.createElement('img');
      imageElement.setAttribute(
        "src",
        news.fields.thumbnail
      );
      imgWrapper.append(imageElement)
      newsElement.appendChild(imgWrapper);
      this.mainContainerEl.append(newsElement);
    })
  }

  displayNewsFromApi() {
    this.client.loadData((data) => {
      this.model.addNews(data);
      this.model.allNews();
      this.displayNews();
    })
  }
}

module.exports = NewsView;