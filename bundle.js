(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // articlesModel.js
  var require_articlesModel = __commonJS({
    "articlesModel.js"(exports, module) {
      var ArticlesModel2 = class {
        constructor() {
          this.articles = [];
        }
        setArticles(articles) {
          this.articles = articles;
        }
        getArticles() {
          return this.articles;
        }
        reset() {
          this.articles = [];
        }
      };
      module.exports = ArticlesModel2;
    }
  });

  // articlesView.js
  var require_articlesView = __commonJS({
    "articlesView.js"(exports, module) {
      var ArticlesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayArticles() {
          const articles = this.model.getArticles();
          articles.forEach((article) => {
            let articleEl = document.createElement("div");
            articleEl.className = "article";
            this.mainContainerEl.append(articleEl);
            let articleHeadingEl = document.createElement("h3");
            articleHeadingEl.className = "article-heading";
            articleHeadingEl.innerText = article.data;
            articleEl.append(articleHeadingEl);
          });
        }
      };
      module.exports = ArticlesView2;
    }
  });

  // index.js
  var ArticlesModel = require_articlesModel();
  var ArticlesView = require_articlesView();
  model = new ArticlesModel();
  view = new ArticlesView(model);
  console.log("Hello!");
  var articlesData = [
    { data: "First article" },
    { data: "Second article" },
    { data: "Third article" }
  ];
  model.setArticles(articlesData);
  view.displayArticles();
})();
