(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // lib/articlesApi.js
  var require_articlesApi = __commonJS({
    "lib/articlesApi.js"(exports, module) {
      var AritclesApi = class {
        constructor() {
          this.date = new Date();
          this.date = this.date.toISOString().split("T")[0];
        }
        loadArticles = (callback) => {
          fetch(`http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?page=1&page-size=20&from-date=${this.date}`).then((response) => response.json()).then((data) => callback(data.response.results));
        };
      };
      module.exports = AritclesApi;
    }
  });

  // lib/articlesModel.js
  var require_articlesModel = __commonJS({
    "lib/articlesModel.js"(exports, module) {
      var ArticlesModel = class {
        constructor() {
          this._articlesArray = [];
        }
        addArticle = (article) => this._articlesArray.push(article);
        getArticles = () => this._articlesArray;
      };
      module.exports = ArticlesModel;
    }
  });

  // lib/articlesView.js
  var require_articlesView = __commonJS({
    "lib/articlesView.js"(exports, module) {
      var ArticlesView = class {
        constructor(modelClass) {
          this.modelClass = modelClass;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayArticles = () => {
          document.querySelectorAll(".article").forEach((element) => {
            element.remove();
          });
          this.modelClass.getArticles().forEach((article) => {
            let articleEl = document.createElement("div");
            articleEl.textContent = article;
            articleEl.className = "article";
            this.mainContainerEl.append(articleEl);
          });
        };
      };
      module.exports = ArticlesView;
    }
  });

  // index.js
  var ApiClass = require_articlesApi();
  var ModelClass = require_articlesModel();
  var ViewClass = require_articlesView();
  var api = new ApiClass();
  var model = new ModelClass();
  var view = new ViewClass(model);
  api.loadArticles((data) => data.forEach((article) => {
    model.addArticle(article.webTitle);
    view.displayArticles();
  }));
})();
