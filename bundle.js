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
          articles.forEach((article) => this.addArticle(article));
        }
      };
      module.exports = NewsModel2;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var NewsView2 = class {
        constructor(model2) {
          this.model = model2;
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
      };
      module.exports = NewsView2;
    }
  });

  // index.js
  var NewsModel = require_newsModel();
  var NewsView = require_newsView();
  var model = new NewsModel();
  var view = new NewsView(model);
  model.addArticle("Fuck this for a game of soldiers");
  view.displayNews();
})();
