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
        loadNews(callback) {
          fetch(this.url).then((response) => response.json()).then((data) => {
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
        }
        getNews() {
          return this.news;
        }
        getImage() {
          return this.newsImage;
        }
        addNews(article) {
          return this.news.push(article);
        }
        setNews(data) {
          return this.news.push(data);
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
          this.mainContainerEL = document.querySelector("#main-container");
        }
        displayNews() {
          this.clearDuplicateNews();
          this.clearDuplicateImages();
          const currentNews = this.model.news[0];
          console.log(currentNews);
          currentNews.forEach((article) => {
            const newEL = document.createElement("h2");
            newEL.className = "headline";
            newEL.innerText = article.webTitle;
            const imageEL = document.createElement("img");
            imageEL.className = "image";
            imageEL.src = article.fields.thumbnail;
            newEL.append(imageEL);
            this.mainContainerEL.append(newEL);
          });
        }
        clearDuplicateNews() {
          document.querySelectorAll("h2.headline").forEach((element) => element.remove());
        }
        clearDuplicateImages() {
          document.querySelectorAll("img.image").forEach((element) => element.remove());
        }
        displayNewsFromApi() {
          this.api.loadNews((data) => {
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
