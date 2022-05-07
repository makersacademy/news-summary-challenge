(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // apiKey.js
  var require_apiKey = __commonJS({
    "apiKey.js"(exports, module) {
      module.exports = "687c0d2e-76a4-43c2-9701-d60275fbbfa8";
    }
  });

  // guardianApi.js
  var require_guardianApi = __commonJS({
    "guardianApi.js"(exports, module) {
      var apiKey = require_apiKey();
      var GuardianApi2 = class {
        loadHeadlines(callback, errorCallBack) {
          const url = `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`;
          fetch(url).then((response) => response.json()).then((data) => {
            callback(data);
          }).catch((error) => {
            console.log("error:", error);
            errorCallBack(error);
          });
        }
      };
      module.exports = GuardianApi2;
    }
  });

  // modelNews.js
  var require_modelNews = __commonJS({
    "modelNews.js"(exports, module) {
      var ModelNews2 = class {
        constructor() {
          this.news = [];
        }
        getNews() {
          return this.news;
        }
        addNews(news) {
          this.news.push(news);
        }
        setNews(news) {
          this.news = news;
        }
        resetModel() {
          this.news = [];
        }
      };
      module.exports = ModelNews2;
    }
  });

  // viewNews.js
  var require_viewNews = __commonJS({
    "viewNews.js"(exports, module) {
      var NewsModel = class {
        constructor(model2) {
          this.model = model2;
          this.maincontainerEl = document.querySelector("#main-container");
        }
        displayNews() {
          document.querySelectorAll(".news").forEach((news2) => {
            news2.remove();
          });
          const news = this.model.getNews();
          news.forEach((news2) => {
            const newsEl = document.createElement("div");
            newsEl.className = "news";
            newsEl.innerText = news2;
            this.maincontainerEl.append(newsEl);
          });
        }
      };
      module.exports = NewsModel;
    }
  });

  // index.js
  var GuardianApi = require_guardianApi();
  var ModelNews = require_modelNews();
  var ViewNews = require_viewNews();
  var model = new ModelNews();
  var view = new ViewNews(model);
  var api = new GuardianApi();
  model.addNews("this is news");
  model.addNews("this is a news as well");
  view.displayNews();
})();
