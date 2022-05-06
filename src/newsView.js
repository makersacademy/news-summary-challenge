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
    this.clearDuplicateImages();
    const currentNews = this.model.news;
    const newsImages = this.model.newsImage;

    console.log(currentNews)
    currentNews.forEach((headline) => {
      newsImages.forEach((imageUrl) => {
        //headline iteration
      let newEL = document.createElement("div")
      newEL.className = "headline";
      newEL.innerText = headline;
      this.mainContainerEL.append(newEL)
      // image iteration
      let imageEL = document.createElement("img")
      imageEL.className = "image";
      imageEL.src = imageUrl
      this.mainContainerEL.append(imageEL)
    })
  })
  }

  clearDuplicateNews() {
    document
    .querySelectorAll("div.headline")
    .forEach((element) => element.remove());
  }
  clearDuplicateImages() {
    document
    .querySelectorAll("img.image")
    .forEach((element) => element.remove());
  }


  displayNewsFromApi() {
    let arr = 10
    for (let i = 0; i < arr; i++) {
    this.api.loadNews((receivedData) => {
      console.log(receivedData)
      this.model.setNews(receivedData.response.results[i].webTitle);
      this.model.setImage(receivedData.response.results[i].fields.thumbnail);
      this.displayNews();
    })
  }
      
  }
}

module.exports = newsView;
