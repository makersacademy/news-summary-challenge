(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

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
      var NewsModel2 = class {
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
      module.exports = NewsModel2;
    }
  });

  // index.js
  var ModelNews = require_modelNews();
  var NewsModel = require_viewNews();
  var ViewNews = require_viewNews();
  var model = new ModelNews();
  var view = new ViewNews(model);
  model.addNews("this is news");
  model.addNews("this is a news as well");
  view.displayNews();
})();
