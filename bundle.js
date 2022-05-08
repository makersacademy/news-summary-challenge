(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/newsApi.js
  var require_newsApi = __commonJS({
    "src/newsApi.js"(exports, module) {
      var newsApi2 = class {
        constructor() {
          this.url = "https://content.guardianapis.com/search?q=Spotlight&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=21831b4e-69fe-49f1-a75d-d24709168ad2";
        }
        loadNews(search, callback) {
          fetch(`https://content.guardianapis.com/search?q=${search}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=21831b4e-69fe-49f1-a75d-d24709168ad2`).then((response) => response.json()).then((data) => {
            console.log("Load", data);
            callback(data.response.results);
          });
        }
      };
      module.exports = newsApi2;
    }
  });

  // src/newsModel.js
  var require_newsModel = __commonJS({
    "src/newsModel.js"(exports, module) {
      var newsModel2 = class {
        constructor() {
          this.news = [];
          this.searchResults = [];
        }
        getNews() {
          return this.news;
        }
        getResults() {
          return this.searchResults;
        }
        addNews(article) {
          return this.news.push(article);
        }
        setNews(data) {
          this.news = data;
        }
      };
      module.exports = newsModel2;
    }
  });

  // src/newsView.js
  var require_newsView = __commonJS({
    "src/newsView.js"(exports, module) {
      var newsApi2 = require_newsApi();
      var newsModel2 = require_newsModel();
      var newsView2 = class {
        constructor(model2 = new newsModel2(), api2 = new newsApi2()) {
          this.model = model2;
          this.api = api2;
          this.mainContainerEL = document.querySelector("#container");
          this.newsSearchEL = document.querySelector("#news-search");
          this.newsSearchSubmitEL = document.querySelector("#news-search-submit");
          this.newsSearchSubmitEL.addEventListener("click", () => {
            this.api.loadNews(this.newsSearchEL.value, (data) => {
              this.model.setNews(data);
              console.log(this.model.getNews());
              this.clearDuplicateNews;
              this.displayNews();
            });
          });
        }
        displayNews() {
          this.clearDuplicateNews();
          this.clearDuplicateImages();
          const currentNews = this.model.getNews();
          currentNews.forEach((article) => {
            const newEL = document.createElement("a");
            newEL.className = "headline";
            var linkText = document.createTextNode(article.fields.headline);
            newEL.appendChild(linkText);
            newEL.href = article.webUrl;
            document.body.appendChild(newEL);
            const imageEL = document.createElement("img");
            imageEL.className = "image";
            imageEL.src = article.fields.thumbnail;
            newEL.append(imageEL);
            document.querySelector("#main-container").append(newEL);
          });
        }
        clearDuplicateNews() {
          document.querySelectorAll("a.headline").forEach((element) => element.remove());
        }
        clearDuplicateImages() {
          document.querySelectorAll("img.image").forEach((element) => element.remove());
        }
        displayNewsFromApi() {
          this.api.loadNews("", (data) => {
            this.model.setNews(data);
            this.displayNews();
          });
        }
      };
      module.exports = newsView2;
    }
  });

  // index.js
  var newsView = require_newsView();
  var newsApi = require_newsApi();
  var newsModel = require_newsModel();
  var api = new newsApi();
  var model = new newsModel();
  var view = new newsView(model, api);
  view.displayNewsFromApi();
})();
