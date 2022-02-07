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
        addHeadline(headline) {
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
        constructor(newsModel) {
          this.newsModel = newsModel;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayHeadlines() {
          document.querySelectorAll(".headline").forEach((element) => {
            element.remove();
          });
          const headlines = this.newsModel.getHeadlines();
          headlines.forEach((headline) => {
            let headlineEl = document.createElement("div");
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
  console.log("bundle is working");
  var NewsModel = require_newsModel();
  var NewsView = require_newsView();
  var model = new NewsModel();
  var view = new NewsView(model);
})();
