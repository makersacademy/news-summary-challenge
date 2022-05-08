const newsApi = require('./newsApi')
const newsModel = require('./newsModel')

class newsView {
  constructor(model = new newsModel, api = new newsApi) {
    this.model = model
    this.api = api
    this.mainContainerEL = document.querySelector("#container")
    this.newsSearchEL = document.querySelector("#news-search")
    this.newsSearchSubmitEL = document.querySelector("#news-search-submit")

    this.newsSearchSubmitEL.addEventListener('click', () => {
      this.api.loadNews(this.newsSearchEL.value, data => {
        this.model.setNews(data)
        console.log(this.model.getNews())
        this.clearDuplicateNews
        this.displayNews()
      })
    })
  }

  // searchNews(title) {
  //   this.api.search(title, (data) => {
  //     this.model.setSearch(data)
  //     this.displaySearchResults();
  //   })
  //   this.displayNewsFromApiSearch()
  // }

  displayNews() {
    this.clearDuplicateNews();
    this.clearDuplicateImages();
    const currentNews = this.model.getNews();
     
    currentNews.forEach((article) => {
        //headline iteration
      const newEL = document.createElement('a')
      newEL.className = "headline";
      var linkText = document.createTextNode(article.fields.headline)
      newEL.appendChild(linkText)
      newEL.href = article.webUrl;
      document.body.appendChild(newEL)
      // newEL.innerText = article.webTitle;
      // image iteration
      const imageEL = document.createElement("img")
      imageEL.className = "image";
      imageEL.src = article.fields.thumbnail;
      newEL.append(imageEL)
      document.querySelector("#main-container").append(newEL)

    })
  }

  // displaySearchResults() {
  //   this.clearDuplicateNews();
  //   const results = this.model.searchResults;
  //   console.log('displaySearchResults', results)
     
  //   results.forEach((article) => {
  //       //headline iteration
  //     const searchEL = document.createElement('a')
  //     searchEL.className = "searchHeadline";
  //     var linkText = document.createTextNode(article.fields.headline)
  //     searchEL.appendChild(linkText)
  //     searchEL.href = article.webUrl;
  //     document.body.appendChild(searchEL)
  //     searchEL.innerText = article.webTitle;
  //     // image iteration
  //     const searchImageEL = document.createElement("img")
  //     searchImageEL.className = "searchImage";
  //     searchImageEL.src = article.fields.thumbnail;
  //     searchEL.append(searchImageEL)
  //     document.querySelector("#main-container").append(searchEL)

  //   })
  // }

  clearDuplicateNews() {
    document
    .querySelectorAll("a.headline")
    .forEach((element) => element.remove());
  }
  clearDuplicateImages() {
    document
    .querySelectorAll("img.image")
    .forEach((element) => element.remove());
  }


  displayNewsFromApi() {
    this.api.loadNews('', (data) => {
      this.model.setNews(data)
      this.displayNews();
    })
  }

    // displayNewsFromApiSearch() {
    //   this.searchNews();
    // }

    // let arr = 10
    // for (let i = 0; i < arr; i++) {
    // this.api.loadNews((receivedData) => {
    //   console.log(receivedData)
    //   this.model.setNews(receivedData.response.results[i].webTitle);
    //   this.model.setImage(receivedData.response.results[i].fields.thumbnail);
    //   this.displayNews();
    // })
  // }
      
  // }
}

module.exports = newsView;
