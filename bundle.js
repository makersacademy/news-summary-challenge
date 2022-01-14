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
        getArticles() {
          return this.articles;
        }
        addArticle(article) {
          this.articles.push(article);
        }
        setArticles(articles) {
          articles.response.results.forEach((article) => this.addArticle(article));
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
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayArticles() {
          const articles = this.model.getArticles();
          articles.forEach((article) => {
            const div = document.createElement("div");
            const headlineDiv = document.createElement("div");
            const imgDiv = document.createElement("div");
            const img = document.createElement("img");
            imgDiv.append(img);
            div.append(headlineDiv);
            div.append(imgDiv);
            img.src = `${article.webUrl}#img-1`;
            headlineDiv.innerText = article.webTitle;
            div.className = "article";
            this.mainContainerEl.append(div);
          });
        }
      };
      module.exports = ArticlesView2;
    }
  });

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var NewsApi2 = class {
        loadArticles(callback) {
          fetch("https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search").then((response) => response.json()).then((data) => callback(data)).catch((error) => {
            console.error(error);
          });
        }
      };
      module.exports = NewsApi2;
    }
  });

  // index.js
  var ArticlesModel = require_articlesModel();
  var ArticlesView = require_articlesView();
  var NewsApi = require_newsApi();
  var api = new NewsApi();
  var model = new ArticlesModel();
  var view = new ArticlesView(model, api);
  api.loadArticles((articles) => {
    model.setArticles(articles);
    view.displayArticles();
  });
})();
