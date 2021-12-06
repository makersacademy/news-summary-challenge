(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // getNews.js
  var require_getNews = __commonJS({
    "getNews.js"(exports, module) {
      var getNews2 = (callback) => {
        fetch("https://content.guardianapis.com/search?page=1&api-key=test&show-fields=all").then((response) => response.json()).then((data) => {
          console.log("Success:", data);
          callback(data);
        }).catch((error) => {
          console.error("Error:", error);
        });
      };
      module.exports = getNews2;
    }
  });

  // displayArticles.js
  var require_displayArticles = __commonJS({
    "displayArticles.js"(exports, module) {
      var displayArticles2 = (data) => {
        let section = document.querySelector("section");
        while (section.firstChild) {
          section.removeChild(section.firstChild);
        }
        let results = data.response.results;
        results.forEach((result) => {
          let article = document.createElement("article");
          let img = document.createElement("img");
          let heading = document.createElement("h3");
          let link = document.createElement("a");
          let content = document.createElement("p");
          article.className = "article";
          content.innerText = result.fields.bodyText;
          link.href = result.webUrl;
          link.innerText = result.webTitle;
          img.src = result.fields.thumbnail;
          article.appendChild(heading);
          heading.appendChild(link);
          article.appendChild(img);
          article.appendChild(content);
          section.appendChild(article);
        });
      };
      module.exports = displayArticles2;
    }
  });

  // index.js
  var getNews = require_getNews();
  var displayArticles = require_displayArticles();
  getNews(displayArticles);
})();
