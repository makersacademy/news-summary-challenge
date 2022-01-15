var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// newsApi.js
var require_newsApi = __commonJS({
  "newsApi.js"(exports, module2) {
    var NewsApi2 = class {
      getArticles(callback, apiKey = API_KEY) {
        fetch(`https://content.guardianapis.com/search?api-key=${apiKey}`).then((response) => response.json()).then((data) => callback(data.response.results)).catch((error) => console.log(error));
      }
    };
    module2.exports = NewsApi2;
  }
});

// newsAppModel.js
var require_newsAppModel = __commonJS({
  "newsAppModel.js"(exports, module2) {
    var newsAppModel = class {
      constructor() {
        this.articles = [];
      }
      addArticle(article) {
        this.articles.push(article);
      }
    };
    module2.exports = newsAppModel;
  }
});

// newsAppView.js
var require_newsAppView = __commonJS({
  "newsAppView.js"(exports, module2) {
    var NewsAppView2 = class {
      constructor(model2, api2) {
        this.model = model2;
        this.api = api2;
        this.mainContainerEl = document.querySelector("#main-container");
      }
      loadArticles() {
        this.api.getArticles((articles) => {
          for (const article of articles) {
            this.model.addArticle(article);
          }
          return this.model.articles;
        });
      }
      displayArticles() {
        let articles = this.model.articles;
        for (const article of articles) {
          let newArticle = document.createElement("div");
          newArticle.className = "article";
          let headline = document.createElement("h2");
          headline.innerText = article.webTitle;
          newArticle.appendChild(headline);
          this.mainContainerEl.appendChild(newArticle);
        }
      }
    };
    module2.exports = NewsAppView2;
  }
});

// index.js
var NewsApi = require_newsApi();
var NewsAppModel = require_newsAppModel();
var NewsAppView = require_newsAppView();
var api = new NewsApi();
var model = new NewsAppModel();
var view = new NewsAppView(model, api);
api.getArticles((articles) => {
  for (const article of articles) {
    model.addArticle(article);
  }
  view.displayArticles();
});
