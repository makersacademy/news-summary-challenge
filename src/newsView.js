const newsApi = require('./newsApi')
const newsModel = require('./newsModel')

class newsView {
  constructor(model = new newsModel, api = new newsApi) {
    this.model = model
    this.api = api
    this.mainContainerEL = document.querySelector("#main-container")
  }

  displayNews() {
    this.clearDuplicateNews();
    const currentNews = this.model.news;
    console.log(currentNews)
    currentNews.forEach((article) => {
      let newEL = document.createElement("div")
      newEL.className = "news";
      newEL.innerText = article;
      this.mainContainerEL.append(newEL)
    })
  }

  clearDuplicateNews() {
    document
    .querySelectorAll("div.news")
    .forEach((element) => element.remove());
  }

  displayNewsFromApi() {
    let arr = 10
    for (let i = 0; i < arr; i++) {
    this.api.loadNews((receivedData) => {
      this.model.setNews(receivedData.response.results[i].webTitle);
      this.displayNews();
    })
  }
      
  }
}

module.exports = newsView;