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
          return fetch(`https://content.guardianapis.com/search?order-by=newest&api-key=${API_KEY}`).then((res) => res.json()).then((res) => {
            return res.response.results;
          });
        };
        displayNews = (data) => {
          for (let item of data) {
            let newDiv = document.createElement("div");
            newDiv.append(item.webTitle);
            newDiv.className = "news";
            this.mainContainerEl.append(newDiv);
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
