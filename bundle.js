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
        fetchNews(query, callback, errorCallback) {
          fetch(`https://content.guardianapis.com/search?q=${query}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`).then((response) => response.json()).then((data) => {
            console.log("Load", data);
            callback(data.response.results);
          }).catch(() => {
            console.error("Error");
            errorCallback();
          });
        }
      };
      module.exports = newsApi;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var newsModel = require_newsModel();
      var newsApi = require_newsApi();
      var newsView = class {
        constructor(model2 = new newsModel(), api2 = new newsApi()) {
          this.model = model2;
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.searchFieldEl = document.querySelector("#search-field");
          this.searchButtonEl = document.querySelector("#search-button");
          this.searchButtonEl.addEventListener("click", () => {
            let query = this.searchFieldEl.value;
            this.displayNewsFromApi(query);
            this.searchFieldEl.value = "";
          });
        }
        displayNews() {
          const oldNews = document.querySelectorAll("div.news");
          oldNews.forEach((article) => {
            article.remove();
          });
          const news = this.model.getNews();
          console.log(news);
          news.forEach((article) => {
            const newsEl = document.createElement("div");
            newsEl.className = "news";
            const imgEl = document.createElement("img");
            imgEl.className = "image";
            imgEl.src = article.fields.thumbnail;
            const hrefEl = document.createElement("a");
            hrefEl.className = "hyperlink";
            hrefEl.innerText = article.webTitle;
            hrefEl.href = article.webUrl;
            newsEl.append(hrefEl);
            newsEl.append(document.createElement("br"));
            newsEl.append(imgEl);
            this.mainContainerEl.append(newsEl);
          });
        }
        displayNewsFromApi(query) {
          this.api.fetchNews(query, (data) => {
            this.model.setNews(data);
            this.displayNews();
          }, () => {
            this.displayError();
          });
        }
        displayError() {
          const oldErrors = document.querySelectorAll("div.error");
          oldErrors.forEach((error) => {
            error.remove();
          });
          let errorElement = document.createElement("div");
          errorElement.className = "error";
          errorElement.innerText = "Oops, something went wrong";
          this.mainContainerEl.append(errorElement);
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
  view.displayNewsFromApi("");
})();
