(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // modelNews.js
  var require_modelNews = __commonJS({
    "modelNews.js"(exports, module) {
      var ModelNews = class {
        constructor() {
          this.news = [];
        }
        getNews() {
          return this.news;
        }
        addNews(news) {
          this.news.push(news);
        }
        resetNews() {
          this.news = [];
        }
      };
      module.exports = ModelNews;
    }
  });

  // viewNews.js
  var require_viewNews = __commonJS({
    "viewNews.js"(exports, module) {
      var NewsView = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayNews() {
          const news = this.model.getNews();
          news.forEach((news2) => {
            const newEl = document.createElement("div");
            newEl.innerText = news2;
            newEl.className = "headline";
            this.mainContainerEl.append(newEl);
          });
        }
      };
      module.exports = NewsView;
    }
  });

  // index.js
  var newsModel = require_modelNews();
  var newsView = require_viewNews();
  var model = new newsModel();
  var view = new newsView(model);
  model.addNews("help");
  console.log("the news app is running");
  console.log(model.getNews());
  view.displayNews();
})();
