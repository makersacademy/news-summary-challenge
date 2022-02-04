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
          this.headlines = [];
        }
        getHeadlines() {
          return this.headlines;
        }
        addHeadlines(headline) {
          this.headlines.push(headline);
        }
        reset() {
          this.headlines = [];
        }
      };
      module.exports = NewsModel2;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var NewsView2 = class {
        constructor(newsModel2) {
          this.newsModel = newsModel2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayNews() {
          const headlines = this.newsModel.getNews();
          headlines.forEach((headline) => {
            const headlineEl = document.createElement("div");
            headlineEl.innerText = headline;
            headlineEl.className = "headline";
            this.mainContainerEl.append(headlineEl);
          });
        }
      };
      module.exports = NewsView2;
    }
  });

  // index.js
  var NewsModel = require_newsModel();
  var NewsView = require_newsView();
  var newsModel = new NewsModel();
  var newsView = new NewsView(newsModel);
  console.log("The news app is running");
  newsView.displayNews();
})();
