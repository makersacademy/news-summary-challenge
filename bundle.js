(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // newsHeadlineView.js
  var require_newsHeadlineView = __commonJS({
    "newsHeadlineView.js"(exports, module) {
      var NewsHeadlineView2 = class {
        constructor(api2) {
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.api.getHeadlines("UK", (returnData) => {
            this.returnData = returnData;
            console.log(returnData);
            this.displayNews();
          });
        }
        displayNews() {
          console.log(this.returnData);
          this.returnData.response.results.forEach((article) => {
            const articleContainerEl = document.createElement("div");
            const articleEl = document.createElement("a");
            const avatarEl = document.createElement("img");
            articleEl.setAttribute("href", article.webUrl);
            articleEl.innerText = article.fields.headline;
            avatarEl.src = article.fields.thumbnail;
            this.mainContainerEl.append(articleContainerEl);
            articleContainerEl.append(articleEl);
            articleEl.append(avatarEl);
          });
        }
      };
      module.exports = NewsHeadlineView2;
    }
  });

  // guardianApi.js
  var require_guardianApi = __commonJS({
    "guardianApi.js"(exports, module) {
      var GuardianApi2 = class {
        getHeadlines(locationName, callback) {
          fetch(`https://content.guardianapis.com/search?q=${locationName}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=471c3b91-05b6-4377-81e7-16d75aee68f7`).then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = GuardianApi2;
    }
  });

  // index.js
  var NewsHeadlineView = require_newsHeadlineView();
  var GuardianApi = require_guardianApi();
  var api = new GuardianApi();
  var view = new NewsHeadlineView(api);
})();
