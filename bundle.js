(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var NewsApi2 = class {
        async loadNews() {
          const url = "https://content.guardianapis.com/search?api-key=4a96ae45-bdd0-4e8e-b642-56bd962528e0";
          try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error(error);
          }
        }
      };
      module.exports = NewsApi2;
    }
  });

  // index.js
  var NewsApi = require_newsApi();
  var news = new NewsApi();
  news.loadNews();
})();
