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
        }
        getByNewest = () => {
          return fetch(`https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&api-key=${API_KEY}`).then((res) => res.json()).then((res) => {
            return res.response.results;
          });
        };
        displayNews = (data) => {
          for (let item of data) {
            console.log(item);
            let newDiv = document.createElement("div");
            let newImg = document.createElement("img");
            newDiv.append(item.webTitle);
            newDiv.className = "news";
            newImg.src = item.fields.thumbnail;
            this.mainContainerEl.append(newDiv);
            this.mainContainerEl.append(newImg);
          }
        };
      };
      module.exports = Headlines2;
    }
  });

  // index.js
  var Headlines = require_headlines();
  var headlines = new Headlines();
  headlines.getByNewest().then((data) => headlines.displayNews(data));
})();
