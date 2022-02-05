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
        }
        displayHeadlines() {
          let headlines = this.model.getHeadlines();
          headlines.forEach((headline) => {
            const headlineEl = document.createElement("div");
            headlineEl.className = "headline";
            headlineEl.innerHTML = "style = color: red;";
            headlineEl.innerText = headline.fields.headline;
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
        setHeadlines(headlines) {
          this.headlines = headlines;
        }
      };
      module.exports = NewsModel2;
    }
  });

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var NewsApi2 = class {
        loadHeadlines(callback, apiKey = "49fcc868-44be-47ad-a97f-fe49abdd7bc2") {
          fetch(`https://content.guardianapis.com/search?api-key=${apiKey}&type=article&show-fields=thumbnail&show-fields=all`).then((response) => response.json()).then((data) => {
            console.log(data), callback(data.response.results);
          }).catch((error) => console.log(error));
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
  var view = new NewsView(model);
  api.loadHeadlines((headlines) => {
    model.setHeadlines(headlines);
    view.displayHeadlines();
  });
})();
