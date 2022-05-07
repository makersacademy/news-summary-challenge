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

  // index.js
  var ModelNews = require_modelNews();
  var model = new ModelNews();
})();
