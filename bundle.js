(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // newsModel.js
  var require_newsModel = __commonJS({
    "newsModel.js"(exports, module) {
      var NewsModel2 = class {
        constructor() {
          this.repoInfo = null;
        }
        setRepoInfo(repoInfo2) {
          this.repoInfo = repoInfo2;
        }
        getRepoInfo() {
          this.repoInfo = repoInfo;
        }
      };
      module.exports = NewsModel2;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var NewsView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
      };
      module.exports = NewsView2;
    }
  });

  // index.js
  var NewsModel = require_newsModel();
  var NewsView = require_newsView();
  var model = new NotesModel();
  var view = new NotesView(model);
  console.log("hello, world");
})();
