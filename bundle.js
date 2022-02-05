(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // newsModel.js
  var require_newsModel = __commonJS({
    "newsModel.js"(exports, module) {
      var NewsModel = class {
        constructor() {
          this.articles = [];
        }
        getArticles() {
          return this.articles;
        }
        addArticle(article) {
          this.articles.push(article);
        }
      };
      module.exports = NewsModel;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var NewsModel = require_newsModel();
      var NewsView = class {
        constructor(model2 = new NewsModel()) {
          this.model = model2;
          this.mainContainer = document.querySelector("#main-container");
        }
        displayArticles() {
          const articles = this.model.getArticles();
          articles.forEach((article) => {
            const div = document.createElement("div");
            div.className = "article";
            div.textContent = article;
            this.mainContainer.append(div);
          });
        }
      };
      module.exports = NewsView;
    }
  });

  // index.js
  var NotesModel = require_newsModel();
  var NotesView = require_newsView();
  var model = new NotesModel();
  var view = new NotesView(model);
  model.addArticle("this is an example article");
  view.displayArticles();
  console.log(model.getArticles());
})();
