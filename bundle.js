(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // fetchArticle.js
  var require_fetchArticle = __commonJS({
    "fetchArticle.js"(exports, module) {
      var fetchArticle2 = (callback) => {
        fetch("https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=test&show-fields=thumbnail").then((response) => response.json()).then((data) => callback(data));
      };
      module.exports = fetchArticle2;
    }
  });

  // displayArticle.js
  var require_displayArticle = __commonJS({
    "displayArticle.js"(exports, module) {
      var displayArticle2 = (data) => {
        console.log(data);
        const articles = document.querySelector("#articles");
        let results = data.response.results;
        results.forEach((result) => {
          let articleLink = document.createElement("a");
          let articleEl = document.createElement("article");
          let articleHeader = document.createElement("h2");
          let articleImage = document.createElement("img");
          articleEl.className = "article";
          articleImage.className = "article-image";
          articleHeader.innerText = result.webTitle;
          articleLink.href = result.webUrl;
          articleImage.src = result.fields.thumbnail;
          articleEl.append(articleHeader);
          articleEl.append(articleImage);
          articleLink.append(articleEl);
          articles.append(articleLink);
        });
      };
      module.exports = displayArticle2;
    }
  });

  // index.js
  var fetchArticle = require_fetchArticle();
  var displayArticle = require_displayArticle();
  fetchArticle(displayArticle);
})();
