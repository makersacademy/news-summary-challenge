(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/apiKey.js
  var require_apiKey = __commonJS({
    "src/apiKey.js"(exports, module) {
      module.exports = "2d9b0ea0-63bc-4f58-ad8a-37eb1a7eddee";
    }
  });

  // src/newsApi.js
  var require_newsApi = __commonJS({
    "src/newsApi.js"(exports, module) {
      var apiKey = require_apiKey();
      var NewsApi = class {
        loadArticles(callback) {
          fetch(`https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`).then((response) => response.json(response)).then((articles) => {
            callback(articles);
          });
        }
      };
      module.exports = NewsApi;
    }
  });

  // src/newsModel.js
  var require_newsModel = __commonJS({
    "src/newsModel.js"(exports, module) {
      var NewsModel = class {
        getArticles() {
          return this.articles;
        }
        setArticles(articles) {
          this.articles = articles.response.results;
        }
      };
      module.exports = NewsModel;
    }
  });

  // src/newsView.js
  var require_newsView = __commonJS({
    "src/newsView.js"(exports, module) {
      var NewsApi = require_newsApi();
      var NewsModel = require_newsModel();
      var NewsView2 = class {
        constructor(model = new NewsModel(), api = new NewsApi()) {
          this.model = model;
          this.api = api;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayArticles() {
          const articles = this.model.getArticles();
          articles.forEach((article) => {
            const articleEl = document.createElement("div");
            articleEl.classList.add("article");
            const articleHeadlineEl = document.createElement("a");
            articleHeadlineEl.classList.add("headline");
            articleHeadlineEl.innerText = article.fields.headline;
            articleHeadlineEl.href = article.webUrl;
            const articleImage = document.createElement("img");
            articleImage.classList.add("thumbnail");
            articleImage.src = article.fields.thumbnail;
            articleEl.append(articleImage);
            articleEl.append(articleHeadlineEl);
            this.mainContainerEl.append(articleEl);
          });
        }
        displayArticlesFromApi() {
          this.api.loadArticles((receivedArticles) => {
            this.model.setArticles(receivedArticles);
            this.displayArticles();
          });
        }
      };
      module.exports = NewsView2;
    }
  });

  // src/index.js
  var NewsView = require_newsView();
  var view = new NewsView();
  view.displayArticlesFromApi();
})();
