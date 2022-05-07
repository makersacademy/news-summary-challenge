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
    const currentNews = this.model.news[0];
     
    currentNews.forEach((article) => {
        //headline iteration
      const newEL = document.createElement('a')
      newEL.className = "headline";
      var linkText = document.createTextNode(article.webTitle)
      newEL.appendChild(linkText)
      newEL.href = article.webUrl;
      document.body.appendChild(newEL)
      // newEL.innerText = article.webTitle;
      // image iteration
      const imageEL = document.createElement("img")
      imageEL.className = "image";
      imageEL.src = article.fields.thumbnail;
      newEL.append(imageEL)
      this.mainContainerEL.append(newEL)
    })
  }

  clearDuplicateNews() {
    document
    .querySelectorAll("h2.headline")
    .forEach((element) => element.remove());
  }
  clearDuplicateImages() {
    document
    .querySelectorAll("img.image")
    .forEach((element) => element.remove());
  }


  displayNewsFromApi() {
    this.api.loadNews((data) => {
      // console.log(data)
      this.model.setNews(data)
      this.displayNews();
    })

    // let arr = 10
    // for (let i = 0; i < arr; i++) {
    // this.api.loadNews((receivedData) => {
    //   console.log(receivedData)
    //   this.model.setNews(receivedData.response.results[i].webTitle);
    //   this.model.setImage(receivedData.response.results[i].fields.thumbnail);
    //   this.displayNews();
    // })
  // }
      
  }
}

module.exports = newsView;
