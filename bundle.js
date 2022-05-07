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
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayNews() {
          let news = this.model.getNews();
          news.forEach((headline) => {
            const newsEl = document.createElement("div");
            newsEl.innerText = headline;
            newsEl.className = "news";
            this.mainContainerEl.append(newsEl);
          });
        }
      };
      module.exports = newsView;
    }
  });

  // index.js
  var NewsModel = require_newsModel();
  var NewsView = require_newsView();
  var model = new NewsModel();
  var view = new NewsView(model);
  model.addNews("test");
  view.displayNews();
})();
