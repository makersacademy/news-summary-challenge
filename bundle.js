(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // getNews.js
  var require_getNews = __commonJS({
    "getNews.js"(exports, module) {
      var getNews2 = (callback) => {
        fetch("https://content.guardianapis.com/search?page=1&api-key=test&show-fields=body,headline,thumbnail").then((response) => response.json()).then((data) => console.log(data));
      };
      module.exports = getNews2;
    }
  });

  // index.js
  var getNews = require_getNews();
  getNews();
})();
