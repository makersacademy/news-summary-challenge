(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var NewsView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.api.loadArticles((data) => {
            this.model.addArticles(data.response.results);
            this.createArticles();
          });
        }
        createArticles() {
          this.model.showArticles().forEach((article) => {
            this.#addArticleEl();
            this.#addImage(article.fields.thumbnail);
            this.#addTitle(article.webTitle, article.webUrl);
          });
        }
        #addArticleEl() {
          let articleEl = document.createElement("article");
          articleEl.className = "article-container";
          this.mainContainerEl.append(articleEl);
        }
        #addTitle(title, source) {
          let titleEl = document.createElement("h2");
          titleEl.innerText = title;
          titleEl.className = "article-title";
          let linkEl = document.createElement("a");
          linkEl.href = source;
          linkEl.append(titleEl);
          this.mainContainerEl.lastElementChild.append(linkEl);
        }
        #addImage(imgSrc) {
          let imgEl = document.createElement("img");
          imgEl.src = imgSrc;
          imgEl.className = "article-image";
          this.mainContainerEl.lastElementChild.append(imgEl);
        }
      };
      module.exports = NewsView2;
    }
  });

  // newsModel.js
  var require_newsModel = __commonJS({
    "newsModel.js"(exports, module) {
      var NewsModel2 = class {
        constructor() {
          this.articles = [];
        }
        addArticles(articles) {
          this.articles = articles;
        }
        showArticles() {
          return this.articles;
        }
      };
      module.exports = NewsModel2;
    }
  });

  // apiKey.js
  var require_apiKey = __commonJS({
    "apiKey.js"(exports, module) {
      var API_KEY = "502d9716-d2db-457c-8bd3-3459d64778ba";
      module.exports = API_KEY;
    }
  });

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var API_KEY = require_apiKey();
      var NewsApi2 = class {
        constructor() {
          this.url = `https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&api-key=${API_KEY}`;
        }
        loadArticles(callback) {
          fetch(this.url).then((res) => res.json()).then((data) => callback(data));
        }
      };
      module.exports = NewsApi2;
    }
  });

  // index.js
  var NewsView = require_newsView();
  var NewsModel = require_newsModel();
  var NewsApi = require_newsApi();
  var api = new NewsApi();
  var model = new NewsModel();
  var views = new NewsView(model, api);
})();
