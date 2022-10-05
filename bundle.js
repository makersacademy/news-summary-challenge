(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/articlesModel.js
  var require_articlesModel = __commonJS({
    "src/articlesModel.js"(exports, module) {
      var ArticlesModel2 = class {
        constructor() {
          this.articles = [];
        }
        setArticles(data) {
          data.forEach((article) => {
            this.articles.push(article);
          });
          return this.articles;
        }
      };
      module.exports = ArticlesModel2;
    }
  });

  // src/articlesView.js
  var require_articlesView = __commonJS({
    "src/articlesView.js"(exports, module) {
      var ArticlesView2 = class {
        constructor() {
          this.mainContainerEl = document.querySelector("#main-container");
          this.articlesContainerEl = document.querySelector("#articles-container");
        }
        displayArticles = (articles) => {
          if (articles.length % 2 != 0)
            articles.pop();
          for (let i = 0; i < articles.length; i += 2) {
            const rowEl = document.createElement("div");
            rowEl.className = "row";
            rowEl.append(this.getArticleColumnDiv(articles[i]));
            rowEl.append(this.getArticleColumnDiv(articles[i + 1]));
            this.articlesContainerEl.append(rowEl);
          }
        };
        getArticleColumnDiv = (article) => {
          const columnEl = document.createElement("div");
          columnEl.className = "col-sm-6";
          columnEl.append(this.getTitleElWithLink(article.title, article.url));
          columnEl.append(this.getDateEl(article.published_date));
          columnEl.append(this.getBylineEl(article.byline));
          columnEl.append(this.getImageEl(article.multimedia[0].url));
          columnEl.append(this.getAbstractEl(article.abstract));
          return columnEl;
        };
        getTitleElWithLink(title, url) {
          const titleEl = document.createElement("h3");
          const linkEl = document.createElement("a");
          linkEl.textContent = title;
          linkEl.href = url;
          titleEl.append(linkEl);
          return titleEl;
        }
        getImageEl(url) {
          const imageEl = document.createElement("img");
          imageEl.src = url;
          imageEl.style.width = "200px";
          return imageEl;
        }
        getBylineEl(byline) {
          const bylineEl = document.createElement("p");
          bylineEl.textContent = byline;
          return bylineEl;
        }
        getDateEl(date) {
          const dateEl = document.createElement("p");
          dateEl.textContent = date;
          return dateEl;
        }
        getAbstractEl(abstract) {
          const abstractEl = document.createElement("p");
          abstractEl.textContent = abstract;
          return abstractEl;
        }
      };
      module.exports = ArticlesView2;
    }
  });

  // apiKey.js
  var require_apiKey = __commonJS({
    "apiKey.js"(exports, module) {
      var API_KEY = "gDVZVg6YSTXr6z3KCiVstB3XgJuOSx2G";
      module.exports = API_KEY;
    }
  });

  // src/newYorkTimesApi.js
  var require_newYorkTimesApi = __commonJS({
    "src/newYorkTimesApi.js"(exports, module) {
      var API_KEY = require_apiKey();
      var NewYorkTimesApi2 = class {
        constructor() {
          this.url = "https://api.nytimes.com/svc/topstories/v2/";
          this.apiKey = `?api-key=${API_KEY}`;
        }
        getArticles(resolve, reject) {
          this.getArticlesHome(resolve, reject);
        }
        getArticlesHome(resolve, reject) {
          const path = "home.json";
          const url = this.url + path + this.apiKey;
          console.log(url);
          fetch(url).then((response) => response.json()).then((data) => resolve(data.results)).catch((error) => reject(error));
        }
      };
      module.exports = NewYorkTimesApi2;
    }
  });

  // src/articlesController.js
  var require_articlesController = __commonJS({
    "src/articlesController.js"(exports, module) {
      var ArticlesController2 = class {
        constructor(model2, view2, api2) {
          this.model = model2;
          this.view = view2;
          this.api = api2;
        }
        loadArticles = () => {
          this.api.getArticles(
            (data) => {
              const articles = this.model.setArticles(data);
              this.view.displayArticles(articles);
            },
            (error) => {
              console.log(error);
            }
          );
        };
      };
      module.exports = ArticlesController2;
    }
  });

  // index.js
  var ArticlesModel = require_articlesModel();
  var ArticlesView = require_articlesView();
  var NewYorkTimesApi = require_newYorkTimesApi();
  var ArticlesController = require_articlesController();
  var api = new NewYorkTimesApi();
  var view = new ArticlesView();
  var model = new ArticlesModel();
  var controller = new ArticlesController(model, view, api);
  controller.loadArticles();
})();
