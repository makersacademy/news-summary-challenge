var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// newsApi.js
var require_newsApi = __commonJS({
  "newsApi.js"(exports, module2) {
    var NewsApi2 = class {
      getArticles(callback, apiKey = API_KEY) {
        fetch(`https://content.guardianapis.com/search?api-key=${apiKey}`).then((response) => response.json()).then((data) => callback(data)).catch((error) => console.log(error));
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

// index.js
var NewsApi = require_newsApi();
var NewsAppModel = require_newsAppModel();
api = new NewsApi();
model = new NewsAppModel();
api.getArticles((articles) => {
  for (const article of articles.response.results) {
    model.addArticle(article);
  }
});
console.log(model.articles);
