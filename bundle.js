(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // guardianAPI.js
  var require_guardianAPI = __commonJS({
    "guardianAPI.js"(exports, module) {
      var guardianAPI = class {
        getArticleInfo(articleTitle, callback) {
          fetch("https://content.guardianapis.com/search" + articleTitle).then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = guardianAPI;
    }
  });

  // newsModel.js
  var require_newsModel = __commonJS({
    "newsModel.js"(exports, module) {
      var newsModel2 = class {
        constructor() {
          this.stories = [];
        }
        getNews() {
          return this.stories;
        }
      };
      module.exports = newsModel2;
    }
  });

  // index.js
  console.log("Hello from the developer console!");
  var GuardianAPI = require_guardianAPI();
  var newsModel = require_newsModel();
  var api = new GuardianAPI();
  var model = new newsModel();
  console.log(model.getNews());
})();
