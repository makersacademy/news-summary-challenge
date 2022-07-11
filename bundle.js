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
          this.articles = [];
        }
        setArticle = (article) => {
          this.articles.push(article);
        };
        getArticle = () => {
          return this.articles;
        };
        clear = () => {
          this.articles = [];
        };
      };
      module.exports = NewsModel2;
    }
  });

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var NewsApi2 = class {
        constructor() {
          this.api = "";
        }
        loadArticles = (callback, query) => {
          fetch(`https://content.guardianapis.com/search?q=${query}&api-key=${this.api}&show-fields=thumbnail`).then((response) => response.json()).then((data) => callback(data)).catch((error) => console.log(`Error: ${error}`));
        };
      };
      module.exports = NewsApi2;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var NewsView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.searchFieldEl = document.querySelector("#search-field");
          this.searchButtonEl = document.querySelector("#search-button");
          this.searchButtonEl.addEventListener("click", () => {
            this.retrieveArticles();
          });
        }
        displayArticles = () => {
          this.mainContainerEl.innerHTML = "";
          this.model.getArticle().forEach((article) => {
            const imageEl = document.createElement("img");
            const headlineEl = document.createElement("h3");
            const a = document.createElement("a");
            imageEl.setAttribute("id", "image");
            headlineEl.setAttribute("id", "article");
            a.setAttribute("href", article.webUrl);
            imageEl.src = article.fields.thumbnail;
            headlineEl.innerText = article.webTitle;
            a.appendChild(headlineEl);
            this.mainContainerEl.append(a);
            this.mainContainerEl.append(imageEl);
          });
        };
        retrieveArticles = () => {
          this.model.clear();
          this.api.loadArticles((response) => {
            response.response.results.forEach((element) => {
              this.model.setArticle(element);
            });
            this.displayArticles();
          }, this.searchFieldEl.value);
        };
      };
      module.exports = NewsView2;
    }
  });

  // index.js
  var NewsModel = require_newsModel();
  var NewsApi = require_newsApi();
  var NewsView = require_newsView();
  var model = new NewsModel();
  var api = new NewsApi();
  var view = new NewsView(model, api);
})();
