(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // guardianAPI.js
  var require_guardianAPI = __commonJS({
    "guardianAPI.js"(exports, module) {
      var guardianAPI = class {
        getArticleInfo(articleTitle, callback) {
          fetch("https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=eace7341-f6b2-40cd-bcb0-b2a6b761597b" + articleTitle).then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = guardianAPI;
    }
  });

  // newsModel.js
  var require_newsModel = __commonJS({
    "newsModel.js"(exports, module) {
      var newsModel2 = class {
        constructor() {
          this.newsInfo = null;
        }
        getNewsInfo(newsInfo) {
          this.newsInfo = newsInfo;
        }
        getNews() {
          return this.newsInfo;
        }
      };
      module.exports = newsModel2;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var newsView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayNews() {
          let existingNews = document.querySelectorAll("div.note");
          existingNews.forEach((element) => element.remove());
          const news = this.model.getNews();
          news.forEach((news_text) => {
            const newsEl = document.createElement("div");
            newsEL.innerText = news_text;
            newsEL.className = "news";
            this.mainContainerEl.append(newsEl);
          });
        }
      };
      module.exports = newsView2;
    }
  });

  // index.js
  console.log("Hello from the developer console!");
  var GuardianAPI = require_guardianAPI();
  var newsModel = require_newsModel();
  var newsView = require_newsView();
  var api = new GuardianAPI();
  var model = new newsModel();
  var view = new newsView(model, api);
  console.log(model.getNews());
  var pageContent = document.querySelector("#content");
  var newEl = document.createElement("a");
  newEl.innerText = result.webTitle;
  newEl.href = result.webUrl;
  newDiv.appendChild(newEl);
  fetch("https://content.guardianapis.com/search").then((res) => console.log(res));
})();
