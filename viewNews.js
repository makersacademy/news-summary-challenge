class NewsModel {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.newsArray = [];
    this.maincontainerEl = document.querySelector('#main-container');
  }

  displayNews() {
    
    document.querySelectorAll('.headline').forEach((news) => {
      news.remove();
    });
    
    document.querySelectorAll('.photo').forEach((image) => {
      image.remove();
    });
    const news = this.model.getNews();
  
    news.forEach(news => {
      const newsEl = document.createElement('a');
      newsEl.className = 'headline';
      let linkText = document.createTextNode(news.fields.headline)
      newsEl.appendChild(linkText);
      newsEl.href = news.webUrl
      document.body.appendChild(newsEl);
      const imageEl = document.createElement('img')
      imageEl.className = 'photo';
      imageEl.src = news.fields.thumbnail;
     
      newsEl.append(imageEl);
      this.maincontainerEl.append(newsEl);
    })
  }

  displayNewsFromApi() {
    this.api.loadHeadlines((recievedData) => {
      const data = recievedData.response.results
      data.forEach(news =>
        this.newsArray.push(news))

      this.model.setNews(this.newsArray);
      this.displayNews();
    })
  }
}

module.exports = NewsModel;