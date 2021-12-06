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
          console.log(jsonData);
          articles = jsonData["response"]["results"];
          articles.forEach((article) => {
            newId = document.querySelectorAll("article").length + 1;
            articleLink = document.createElement("a");
            articleLink.href = article.webUrl;
            articleSection = document.createElement("article");
            articleSection.id = `article-${newId}`;
            articleTitle = document.createElement("h3");
            articleTitle.innerText = article.webTitle;
            articlethumbnail = document.createElement("img");
            articlethumbnail.src = article.fields.thumbnail;
            articleSection.append(articleTitle);
            articleSection.append(articlethumbnail);
            articleLink.append(articleSection);
            document.querySelector(".articleContainer").appendChild(articleLink);
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
