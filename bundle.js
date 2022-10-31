(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // articleModel.js
  var require_articleModel = __commonJS({
    "articleModel.js"(exports, module) {
      var ArticleModel2 = class {
        constructor() {
          this.articles = null;
          this.headlines = [];
        }
        setArticleInfo(articles) {
          this.articles = articles;
        }
        getArticleInfo() {
          return this.articles;
        }
        getArticleHeadlines() {
          const articleData = this.articles.response.results;
          let headlines = articleData.map((article) => {
            return article.webTitle;
          });
          return headlines;
        }
      };
      module.exports = ArticleModel2;
    }
  });

  // articleView.js
  var require_articleView = __commonJS({
    "articleView.js"(exports, module) {
      var ArticleView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-container");
          const newsButtonEl = document.querySelector("#pull-news");
          newsButtonEl.addEventListener("click", () => {
            this.display();
          });
        }
        display() {
          let headlines = this.model.getArticleHeadlines();
          const headlineEl = document.querySelector("#headline");
          headlines.forEach((headline) => {
            const headlineEl2 = document.createElement("h3");
            headlineEl2.textContent = headline;
            headlineEl2.id = "headline";
            this.mainContainerEl.append(headlineEl2);
          });
        }
        displayArticlesFromApi() {
          this.api.getArticleInfo((articles) => {
            this.model.setArticleInfo(articles);
            this.display();
          });
        }
      };
      module.exports = ArticleView2;
    }
  });

  // apiKey.js
  var require_apiKey = __commonJS({
    "apiKey.js"(exports, module) {
      module.exports = "49ec9cbf-9de4-4b3d-bc78-243db3e3a237";
    }
  });

  // guardianApi.js
  var require_guardianApi = __commonJS({
    "guardianApi.js"(exports, module) {
      var apiKey = require_apiKey();
      var apiUrl = `https://content.guardianapis.com/search?api-key=${apiKey}`;
      var GuardianApi2 = class {
        getArticleInfo(callback) {
          fetch(apiUrl).then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = GuardianApi2;
    }
  });

  // index.js
  var ArticleModel = require_articleModel();
  var ArticleView = require_articleView();
  var GuardianApi = require_guardianApi();
  var model = new ArticleModel();
  var api = new GuardianApi();
  var view = new ArticleView(model, api);
  console.log("hello, world");
  view.displayArticlesFromApi();
})();
