(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var NewsView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayHeadlines() {
          const headlines = this.model.getHeadlines();
          headlines.forEach((headline) => {
            const headlineEl = document.createElement("div");
            headlineEl.className = "headline";
            headlineEl.innerText = headline;
            this.mainContainerEl.append(headlineEl);
          });
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
          this.headlines = [];
        }
        getHeadlines() {
          return this.headlines;
        }
        addHeadline(text) {
          this.headlines.push(text);
        }
      };
      module.exports = NewsModel2;
    }
  });

  // index.js
  var NewsView = require_newsView();
  var NewsModel = require_newsModel();
  var model = new NewsModel();
  model.addHeadline("HEADLINE 1");
  var view = new NewsView(model);
  view.displayHeadlines();
  console.log("News Summary App is running!");
})();
