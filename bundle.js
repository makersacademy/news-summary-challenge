(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // newsModel.js
  var require_newsModel = __commonJS({
    "newsModel.js"(exports, module) {
      var newsModel = class {
        constructor() {
          this.news = [];
        }
        getNews() {
          return this.news;
        }
        addNews(headline) {
          this.news.push(headline);
        }
        setNews(array) {
          this.news = array;
        }
      };
      module.exports = newsModel;
    }
  });

  // apiKey.js
  var require_apiKey = __commonJS({
    "apiKey.js"(exports, module) {
      module.exports = "c9c4fa9c-47e0-433a-95e9-4b5932105928";
    }
  });

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var apiKey = require_apiKey();
      var newsApi = class {
        fetchNews(callback) {
          fetch(`https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`).then((response) => response.json()).then((data) => {
            console.log("Load", data);
            callback(data.response.results);
          }).catch(() => {
            console.error("Error");
            callback();
          });
        }
      };
      module.exports = newsApi;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var newsView = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayNews() {
          const oldNews = document.querySelectorAll("div.news");
          oldNews.forEach((headline) => {
            headline.remove();
          });
          let news = this.model.getNews();
          news.forEach((headline) => {
            const newsEl = document.createElement("div");
            newsEl.innerText = headline.webTitle;
            newsEl.className = "news";
            this.mainContainerEl.append(newsEl);
          });
        }
        displayNewsFromApi() {
          this.api.fetchNews((data) => {
            this.model.setNews(data);
            this.displayNews();
          });
        }
      };
      module.exports = newsView;
    }
  });

  // index.js
  var NewsModel = require_newsModel();
  var NewsApi = require_newsApi();
  var NewsView = require_newsView();
  var model = new NewsModel();
  var api = new NewsApi();
  var view = new NewsView(model, api);
  view.displayNewsFromApi();
})();
