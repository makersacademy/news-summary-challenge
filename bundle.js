(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // apikey.js
  var require_apikey = __commonJS({
    "apikey.js"(exports, module) {
      var API_KEY = "4a96ae45-bdd0-4e8e-b642-56bd962528e0";
      module.exports = API_KEY;
    }
  });

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var API_KEY = require_apikey();
      var NewsApi2 = class {
        async loadNews(callback) {
          const url = `https://content.guardianapis.com/search?page=1&q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${API_KEY}`;
          try {
            const response = await fetch(url);
            const data = await response.json();
            callback(data);
          } catch (error) {
            console.error(error);
          }
        }
      };
      module.exports = NewsApi2;
    }
  });

  // newsModel.js
  var require_newsModel = __commonJS({
    "newsModel.js"(exports, module) {
      var NewsModel2 = class {
        constructor(...newsList) {
          this.newsList = newsList;
        }
        getNews() {
          return this.newsList;
        }
        setNews(news) {
          this.newsList = news;
        }
      };
      module.exports = NewsModel2;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var NewsApi2 = require_newsApi();
      var NewsModel2 = require_newsModel();
      var NewsView2 = class {
        constructor(model2 = new NewsModel2(), api2 = new NewsApi2()) {
          this.model = model2;
          this.api = api2;
          document.querySelector("#load-news").addEventListener("click", (e) => {
            e.preventDefault();
            this.api.loadNews((callback) => {
              this.mainContainerEl = document.querySelector("#news-list");
              this.displayNews(callback);
            });
          });
        }
        displayNews(newsList) {
          this.removePrevNews();
          newsList = this.model.getNews();
          Array.from(newsList).forEach((news) => {
            const header = document.createElement("a");
            console.log(header);
            header.innerText = news.fields.headline;
            header.href = news.webUrl;
            header.className = "headline";
            const image = document.createElement("img");
            image.src = news.fields.thumbnail;
            image.className = "image";
            this.mainContainerEl.append(header);
            this.mainContainerEl.append(image);
          });
        }
        removePrevNews() {
          const prevHeader = document.querySelectorAll(".headline");
          const prevImage = document.querySelectorAll(".image");
          prevHeader.forEach((h) => {
            h.remove();
          });
          prevImage.forEach((i) => {
            i.remove();
          });
        }
      };
      module.exports = NewsView2;
    }
  });

  // index.js
  var NewsApi = require_newsApi();
  var NewsModel = require_newsModel();
  var NewsView = require_newsView();
  var api = new NewsApi();
  var model = new NewsModel();
  var view = new NewsView(model, api);
  api.loadNews((data) => {
    model.setNews(data.response.results);
    model.getNews(data.response.results);
    view.displayNews();
  });
})();
