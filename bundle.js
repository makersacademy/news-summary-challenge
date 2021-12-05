(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // get_news.js
  var require_get_news = __commonJS({
    "get_news.js"(exports, module) {
      var get_news2 = () => {
        fetch("./news.json").then((response) => {
          return response.json();
        }).then((jsonData) => {
          articles = jsonData["response"]["results"];
          articles.forEach((article) => {
            newId = document.querySelectorAll("p").length + 1;
            articleDiv = document.createElement("p");
            articleDiv.className = "article";
            articleDiv.id = `article-${newId}`;
            title = document.createElement("span");
            title.className = "title";
            title.innerText = article.webTitle;
            articleDiv.append(title);
            document.body.appendChild(articleDiv);
          });
        });
      };
      module.exports = get_news2;
    }
  });

  // index.js
  var get_news = require_get_news();
  get_news();
})();
