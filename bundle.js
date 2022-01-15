(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var NewsApi2 = class {
        loadNews(callback) {
          fetch("https://content.guardianapis.com/search?page=1&q=debate&api-key=98e51f22-b91b-4a89-b784-aa14c541dfed").then((responseAnswer) => responseAnswer.json()).then((data) => {
            callback(data);
          }).catch((error) => {
            console.error("ERROR", error);
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
        getHeadlines() {
          return this.headlines;
        }
        addHeadline(headline) {
          this.headlines.push(headline);
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
        }
        displayHeadlines() {
          const headlines = this.model.getHeadlines();
          headlines.forEach((headline) => {
            const headlineEl = document.createElement("div");
            headlineEl.innerText = headline["headline"];
            headlineEl.className = "headline";
            this.headlinesContainerEl = document.querySelector("#headline-container");
            this.headlinesContainerEl.append(headlineEl);
            const imageEl = document.createElement("img");
            imageEl.className = "headlineImage";
            imageEl.src = "https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png";
            this.headlinesContainerEl.append(imageEl);
          });
        }
        setImageSrc(data) {
          data;
        }
      };
      module.exports = NewsView2;
    }
  });

  // index.js
  var NewsApi = require_newsApi();
  var NewsModel = require_newsModel();
  var NewsView = require_newsView();
  api = new NewsApi();
  api.loadNews();
  model = new NewsModel();
  view = new NewsView(model);
  api.loadNews((newsData) => {
    newsData.response.results.forEach((element) => {
      model.addHeadline({ "headline": element.webTitle });
    });
    view.displayHeadlines();
  });
})();
