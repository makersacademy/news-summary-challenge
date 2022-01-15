(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // lib/articlesApi.js
  var require_articlesApi = __commonJS({
    "lib/articlesApi.js"(exports, module) {
      var AritclesApi = class {
        constructor() {
          this.date = new Date();
          this.date = this.date.toISOString().split("T")[0];
        }
        loadArticles = (callback) => {
          fetch(`http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?page=1&page-size=20&from-date=${this.date}`).then((response) => response.json()).then((data) => callback(data));
        };
      };
      module.exports = AritclesApi;
    }
  });

  // index.js
  var ApiClass = require_articlesApi();
  var api = new ApiClass();
  api.loadArticles();
})();
