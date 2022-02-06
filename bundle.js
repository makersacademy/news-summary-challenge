(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var NewsView2 = class {
        constructor() {
          this.mainContainerEl = document.querySelector("#main-container");
        }
        addTitle(title) {
          let titleEl = document.createElement("h2");
          titleEl.className = "article-title";
          titleEl.innerText = title;
          this.mainContainerEl.append(titleEl);
        }
      };
      module.exports = NewsView2;
    }
  });

  // index.js
  var NewsView = require_newsView();
  var views = new NewsView();
  views.addTitle;
})();
