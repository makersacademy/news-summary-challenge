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
            let articleImageEl = document.createElement("img");
            articleImageEl.className = "article-image";
            articleImageEl.src = article.thumbnail;
            articleEl.append(articleImageEl);
            let articleHeadlineEl = document.createElement("h3");
            articleHeadlineEl.className = "article-headline";
            articleHeadlineEl.innerText = article.headline;
            articleEl.append(articleHeadlineEl);
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
        loadArticles(callback) {
          fetch(`https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${API_KEY2}`).then((response) => response.json()).then((data) => {
            callback(data);
          });
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
  view = new ArticlesView(model);
  console.log("Hello!");
  var articlesData = [
    { headline: "First article", thumbnail: "./images/image1.jpeg" },
    { headline: "Second article", thumbnail: "./images/image2.jpeg" },
    { headline: "Third article", thumbnail: "./images/image3.jpeg" }
  ];
  model.setArticles(articlesData);
  view.displayArticles();
  model.reset();
})();
