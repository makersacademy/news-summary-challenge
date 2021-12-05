(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // fetchArticle.js
  var require_fetchArticle = __commonJS({
    "fetchArticle.js"(exports, module) {
      var fetchArticle2 = (callback) => {
        fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/2021/dec/05/raab-says-formal-party-in-no-10-last-christmas-would-have-broken-rules?show-fields=body").then((response) => response.json()).then((data) => callback(data));
      };
      module.exports = fetchArticle2;
    }
  });

  // displayArticle.js
  var require_displayArticle = __commonJS({
    "displayArticle.js"(exports, module) {
      var displayArticle2 = (data) => {
        const articleTitle = document.createElement("p");
        articleTitle.innerText = data.response.content.webTitle;
        document.body.append(articleTitle);
      };
      module.exports = displayArticle2;
    }
  });

  // index.js
  var fetchArticle = require_fetchArticle();
  var displayArticle = require_displayArticle();
  fetchArticle(displayArticle);
})();
