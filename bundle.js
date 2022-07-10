(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var NewsApi2 = class {
        loadHeadlines(callback) {
          fetch("http://localhost:3000/news").then((response) => response.json()).then((data) => {
            callback(data.response.results);
          });
        }
      };
      module.exports = NewsApi2;
    }
  });

  // newsModel.js
  var require_newsModel = __commonJS({
    "newsModel.js"(exports, module) {
      var NewsModel2 = class {
        constructor() {
          this.headlines = [];
        }
        addHeadline(headline) {
          this.headlines.push(headline);
        }
        getHeadlines() {
          return this.headlines;
        }
        setHeadlines(headlines) {
          headlines.forEach((headline) => this.headlines.push(headline.fields));
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
          this.api = api2;
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayHeadlines() {
          const headlines = this.model.getHeadlines();
          this._addHeadlinesToPage(headlines);
        }
        displayHeadlinesfromAPI() {
          this.api.loadHeadlines((headlines) => {
            this.model.setHeadlines(headlines);
            this.displayHeadlines();
          });
        }
        _addHeadlinesToPage(headlines) {
          headlines.forEach((headline) => {
            const imageEl = document.createElement("img");
            imageEl.className = "thumbnail";
            imageEl.src = headline.thumbnail;
            const headlineEl = document.createElement("div");
            headlineEl.innerText = headline.headline;
            headlineEl.className = "headline";
            this.mainContainerEl.append(imageEl);
            this.mainContainerEl.append(headlineEl);
          });
        }
      };
      module.exports = NewsView2;
    }
  });

  // index.js
  var NewsApi = require_newsApi();
  var NewsModel = require_newsModel();
  var NewsView = require_newsView();
  var api = new NewsApi();
  var model = new NewsModel();
  var view = new NewsView(model, api);
  view.displayHeadlinesfromAPI();
})();
