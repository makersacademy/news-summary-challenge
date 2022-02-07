const NewsApi = require("./newsApi");
const NewsModel = require("./newsModel");

class NewsView {
  constructor(model = new NewsModel(), api = new NewsApi()) {
    this.model = model;
    this.api = api;
    this.searcInputEl = document.querySelector("#search-input");

   

    document.querySelector("#load-news").addEventListener("click", () => {
        document.querySelector(".search-input").style.visibility = "visible";
        document.querySelector(".search-news").style.visibility = "visible";
      this.api.loadNews((data) => {
        this.mainContainerEl = document.querySelector("#news-list");
        this.displayNews(data);
       
        
      });
      
    });

    document.querySelector("#search-news").addEventListener("click", () => {
        const searchKey = this.searcInputEl.value;
        console.log(searchKey)
        this.api.searchNews(searchKey, (data) => {
          this.mainContainerEl = document.querySelector("#news-list");
          console.log(data)
            this.displayNews(data);
        });
        
      });
  }

  displayNews(newsList) {
    this.removePrevNews();

    newsList = this.model.getNews();
    Array.from(newsList).forEach((news) => {
      const div = document.createElement("div");
      div.className = "news-item";
      const header = document.createElement("a");
      header.innerText = news.fields.headline;
      header.href = news.webUrl;
      header.className = "headline";
      const image = document.createElement("img");
      image.src = news.fields.thumbnail;
      image.className = "image";
      div.append(image);
      div.append(header);
      this.mainContainerEl.append(div);
    //   console.log(this.mainContainerEl)
    });
  }

  

  removePrevNews() {
    const prevNews = document.querySelectorAll(".news-item");

    prevNews.forEach((news) => {
      news.remove();
    });
  }
}
module.exports = NewsView;
