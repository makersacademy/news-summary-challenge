(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // headlines.js
  var require_headlines = __commonJS({
    "headlines.js"(exports, module) {
      var Headlines2 = class {
        constructor() {
          this.mainContainerEl = document.querySelector("#main-container");
          this.newsElements = null;
        }
        getByNewest = () => {
          return fetch(`https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&api-key=${API_KEY}`).then((res) => res.json()).then((res) => {
            return res.response.results;
          });
        };
        displayNews = (data) => {
          console.log(data);
          for (let item of data) {
            let newsEl = document.createElement("a");
            newsEl.href = "#";
            newsEl.append(item.webTitle);
            newsEl.className = "news";
            let newImg = document.createElement("img");
            newImg.className = "thumbnail";
            newImg.src = item.fields.thumbnail;
            this.mainContainerEl.append(newsEl);
            let linebreak = document.createElement("br");
            newsEl.append(linebreak);
            newsEl.append(newImg);
          }
        };
        displaySummary = () => {
          this.newsElements = document.querySelectorAll(".news");
          for (let item of this.newsElements) {
            item.addEventListener("click", () => console.log(item.innerHTML));
          }
        };
      };
      module.exports = Headlines2;
    }
  });

  // index.js
  var Headlines = require_headlines();
  var headlines = new Headlines();
  headlines.getByNewest().then((data) => headlines.displayNews(data)).then(() => headlines.displaySummary());
})();
