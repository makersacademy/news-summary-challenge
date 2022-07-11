(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // newsModel.js
  var require_newsModel = __commonJS({
    "newsModel.js"(exports, module) {
      var NewsModel2 = class {
        constructor() {
          this.news = [];
        }
        getNews() {
          return this.news;
        }
        addArticle(article) {
          this.news.push(article);
        }
        setArticles(articles) {
          articles.forEach((article) => this.addArticle(article.webTitle));
        }
      };
      module.exports = NewsModel2;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var NewsView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayNews() {
          const articles = this.model.getNews();
          articles.forEach((article) => {
            const newsEl = document.createElement("div");
            newsEl.innerText = article;
            newsEl.className = "news";
            this.mainContainerEl.append(newsEl);
          });
        }
        displayNewsFromApi() {
          this.api.loadData((data) => {
            this.model.setArticles(data.response.results);
            this.displayNews();
          });
        }
      };
      module.exports = NewsView2;
    }
  });

  // apikey.js
  var require_apikey = __commonJS({
    "apikey.js"(exports, module) {
      var apiKey = "11ea4976-aa56-4081-85fd-ec4e4f8";
      module.exports = apiKey;
    }
  });

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var apiKey = require_apikey();
      var baseUrl = "https://content.guardianapis.com/search?format=json&api-key=";
      var NewsApi2 = class {
        loadData(callback) {
          fetch(`${baseUrl}${apiKey}`, { mode: "no-cors" }).then((response) => response.json()).then((data) => {
            callback(data);
          }).catch(function(error) {
            console.log("Request failed", error);
          });
        }
      };
      module.exports = NewsApi2;
    }
  });

  // index.js
  var NewsModel = require_newsModel();
  var NewsView = require_newsView();
  var NewsApi = require_newsApi();
  var model = new NewsModel();
  var api = new NewsApi();
  var view = new NewsView(model, api);
  view.displayNewsFromApi();
})();
