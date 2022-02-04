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
        addHeadlines(stories) {
          stories.forEach((story) => {
            this.headlines.push(story.webTitle);
          });
        }
        reset() {
          this.headlines = [];
        }
      };
      module.exports = NewsModel2;
    }
  });

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var NewsApi2 = class {
        getNews(callback) {
          fetch("https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=test").then((response) => response.json()).then((data) => {
            callback(data.response.results);
          });
        }
      };
      module.exports = NewsApi2;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var NewsView2 = class {
        constructor(newsModel2, newsApi2) {
          this.newsModel = newsModel2;
          this.newsApi = newsApi2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayNews() {
          const headlines = this.newsModel.getHeadlines();
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
  var NewsApi = require_newsApi();
  var NewsView = require_newsView();
  var newsModel = new NewsModel();
  var newsApi = new NewsApi();
  var newsView = new NewsView(newsModel, newsApi);
  console.log("The news app is running");
  newsApi.getNews((headlines) => {
    newsModel.addHeadlines(headlines);
    newsView.displayNews();
  });
})();
