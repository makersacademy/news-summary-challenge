(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // getNews.js
  var require_getNews = __commonJS({
    "getNews.js"(exports, module) {
      getNews = () => {
        fetch("https://content.guardianapis.com/search?use-date=newspaper-edition&show-fields=all&q=headlines&api-key=test").then((response) => {
          return response.json();
        }).then((jsonData) => {
          news = jsonData.response.results;
          console.log(news);
          news.forEach((element) => {
            newDiv = document.createElement("div");
            newDiv.innerHTML = `<img src="${element.fields.thumbnail}"><br>
        <h2> ${element.webTitle} </h2>
        <a href = ${element.webUrl}><h3>${element.fields.bodyText.substring(0, 100)}...</h3></a>`;
            newDiv.addEventListener("click", () => {
              document.body.innerHTML = `<h1>${element.webTitle}</h1><div>${element.fields.body}</div>`;
            });
            document.body.append(newDiv);
          });
        });
      };
      module.exports = getNews;
    }
  });

  // index.js
  var geNews = require_getNews();
  getNews();
})();
