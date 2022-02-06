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
          this.mainContainerEl = document.querySelector("#main-container");
          this.inputEl = document.querySelector("#inputEl");
          this.btnEl = document.querySelector("#btnEl");
          this.btnEl.addEventListener("click", () => {
            const userSearch = this.inputEl.value;
            console.log(userSearch);
            this.inputEl.value = "";
            api2.searchHeadlines(userSearch, (data) => {
              this.model.setHeadlines(data);
              this.displayHeadlines(data);
            });
          });
        }
        displayHeadlines(data) {
          const newsArticles = [];
          data.forEach((headline) => {
            const headlineEl = document.createElement("div");
            headlineEl.className = "headline";
            const hrefEl = document.createElement("a");
            hrefEl.className = "article-link";
            hrefEl.href = headline.webUrl;
            hrefEl.innerText = headline.webTitle;
            const imgEl = document.createElement("img");
            imgEl.className = "article-img";
            imgEl.src = headline.fields.thumbnail;
            headlineEl.append(imgEl);
            headlineEl.append(hrefEl);
            newsArticles.push(headlineEl);
          });
          this.mainContainerEl.replaceChildren(...newsArticles);
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
          this.headlines = [...headlines];
        }
      };
      module.exports = NewsModel2;
    }
  });

  // apiKey.js
  var require_apiKey = __commonJS({
    "apiKey.js"(exports, module) {
      var guardianApi = "49fcc868-44be-47ad-a97f-fe49abdd7bc2";
      module.exports = guardianApi;
    }
  });

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var apiKey = require_apiKey();
      var NewsApi2 = class {
        loadHeadlines(callback) {
          fetch(`https://content.guardianapis.com/search?api-key=${apiKey}&type=article&show-fields=thumbnail&show-fields=all`).then((response) => response.json()).then((data) => {
            console.log(data.response.results), callback(data.response.results);
          }).catch((error) => console.log(error));
        }
        searchHeadlines(searchTerm = "", callback) {
          fetch(`https://content.guardianapis.com/search?q=${searchTerm}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`).then((response) => response.json()).then((data) => {
            console.log(data.response.results), callback(data.response.results);
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
  var view = new NewsView(model, api);
  api.loadHeadlines((headlines) => {
    model.setHeadlines(headlines);
    view.displayHeadlines(headlines);
  });
  console.log("News Summary App is running!");
})();
