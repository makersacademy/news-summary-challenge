(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var NewsApi2 = class {
        constructor(api_key) {
          this.api_key = api_key;
          this.url = "https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=";
        }
        loadArticles(callback) {
          fetch(this.url + this.api_key).then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = NewsApi2;
    }
  });

  // newsModel.js
  var require_newsModel = __commonJS({
    "newsModel.js"(exports, module) {
      var newsModel = class {
        constructor(articles = []) {
          this.articles = articles;
        }
        setArticles(articlesArr) {
          this.articles = articlesArr;
        }
        getArticles() {
          return this.articles;
        }
      };
      module.exports = newsModel;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var newsView = class {
        constructor(model2) {
          this.model = model2;
          this.articlesDivEl = document.querySelector("#articles-main");
        }
        displayArticles() {
          let articles = this.model.getArticles();
          for (let index = 0; index < articles.length; index++) {
            this.#addDiv("article", index);
            this.#displayTitle(articles[index].webTitle, index);
            this.#displayImage(articles[index].fields.thumbnail, index);
          }
        }
        #displayTitle(heading, index) {
          let articleDiv = document.querySelector(`div#article-${index}`);
          let headlineDiv = document.createElement(`h1`);
          headlineDiv.append(heading);
          articleDiv.append(headlineDiv);
        }
        #addDiv(className, index) {
          let articleDiv = document.createElement(`div`);
          articleDiv.className = className;
          articleDiv.id = `${className}-${index}`;
          this.articlesDivEl.append(articleDiv);
        }
        #displayImage(imageUrl, index) {
          let articleDiv = document.querySelector(`div#article-${index}`);
          let imgEl = document.createElement("img");
          imgEl.src = imageUrl;
          articleDiv.append(imgEl);
        }
      };
      module.exports = newsView;
    }
  });

  // env-ns:/Users/mateuszdiak/Documents/Projects/week7/news-summary-challenge/.env
  var GUARDIAN_API_KEY = "3f49f4ec-c2c2-4c24-bc6c-9646a0d9855d";

  // index.js
  var NewsApi = require_newsApi();
  var NewsModel = require_newsModel();
  var NewsView = require_newsView();
  var api = new NewsApi(GUARDIAN_API_KEY);
  var model = new NewsModel();
  var view = new NewsView(model);
  api.loadArticles((data) => {
    model.setArticles(data.response.results);
    view.displayArticles();
  });
})();
