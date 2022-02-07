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
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-container");
          document.querySelector("#search-content-btn").addEventListener("click", () => {
            this.model.reset();
            const query = document.querySelector("#search-content-input").value;
            console.log("Query: ", query);
            this.api.loadArticles((articles) => {
              let articlesList = articles.response.results;
              console.log(articlesList);
              this.model.setArticles(articlesList);
              this.displayArticles();
            }, query);
          });
        }
        displayArticles() {
          document.querySelectorAll("div.article").forEach((element) => {
            element.remove();
          });
          const articles = this.model.getArticles();
          articles.forEach((article) => {
            const articleEl = document.createElement("div");
            articleEl.className = "article";
            this.mainContainerEl.append(articleEl);
            const articleImageEl = document.createElement("img");
            articleImageEl.className = "article-image";
            articleImageEl.src = article.fields.thumbnail;
            articleEl.append(articleImageEl);
            const articleHeadlineEl = document.createElement("h3");
            articleHeadlineEl.className = "article-headline";
            articleEl.append(articleHeadlineEl);
            const articleLinkEl = document.createElement("a");
            articleLinkEl.href = article.webUrl;
            articleLinkEl.innerText = article.fields.headline;
            articleHeadlineEl.append(articleLinkEl);
          });
        }
      };
      module.exports = ArticlesView2;
    }
  });

  // apiKey.js
  var require_apiKey = __commonJS({
    "apiKey.js"(exports, module) {
      API_KEY = "7b8e5e48-5526-446b-9254-1f74fc5f0cbf";
      module.exports = API_KEY;
    }
  });

  // articlesApi.js
  var require_articlesApi = __commonJS({
    "articlesApi.js"(exports, module) {
      var API_KEY2 = require_apiKey();
      var ArticlesApi2 = class {
        loadArticles(callback, query) {
          this.query = this.#queryToUrl(query);
          fetch(`https://content.guardianapis.com/search?q=${this.query}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${API_KEY2}`).then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
        #queryToUrl(queryStr) {
          queryStr ? this.query = queryStr.split(" ").join(",") : this.query = "";
          return this.query;
        }
      };
      module.exports = ArticlesApi2;
    }
  });

  // index.js
  var ArticlesModel = require_articlesModel();
  var ArticlesView = require_articlesView();
  var ArticlesApi = require_articlesApi();
  model = new ArticlesModel();
  api = new ArticlesApi();
  view = new ArticlesView(model, api);
  console.log("Hello!");
  api.loadArticles((articles) => {
    let articlesList = articles.response.results;
    console.log(articlesList);
    model.setArticles(articlesList);
    view.displayArticles();
  });
  model.reset();
})();
