(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // apiKey.js
  var require_apiKey = __commonJS({
    "apiKey.js"(exports, module) {
      module.exports = "564383db-e843-4417-b893-f71815836c8f";
    }
  });

  // newsClient.js
  var require_newsClient = __commonJS({
    "newsClient.js"(exports, module) {
      var apiKey = require_apiKey();
      var NewsClient = class {
        constructor() {
        }
        loadArticles() {
          return fetch(`https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`).then((response) => response.json()).then((data) => {
            return data;
          });
        }
        // loadTopicArticles(topic) {
        //   return fetch(`https://content.guardianapis.com/search?q=${topic}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`)
        //   .then((response) => response.json())
        //   .then((data) => {return data}) 
        // }
      };
      module.exports = NewsClient;
    }
  });

  // newsModel.js
  var require_newsModel = __commonJS({
    "newsModel.js"(exports, module) {
      var NewsModel = class {
        constructor() {
          this.articles = [];
        }
        getArticles() {
          console.log(this.articles);
          return this.articles;
        }
        setArticles(articles) {
          this.articles = articles.response.results;
        }
      };
      module.exports = NewsModel;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var NewsView = class {
        constructor(model2, client2) {
          this.model = model2;
          this.client = client2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayArticles() {
          const articles = this.model.getArticles();
          articles.forEach((article) => {
            const divEl = document.createElement("div");
            divEl.className = "article";
            divEl.textContent = article.fields.headline;
            const imageEl = document.createElement("img");
            imageEl.src = article.fields.thumbnail;
            divEl.append(imageEl);
            const linkEl = document.createElement("a");
            linkEl.innerHTML = "Read more";
            linkEl.href = article.webUrl;
            divEl.append(linkEl);
            this.mainContainerEl.append(divEl);
          });
        }
        displayArticlesFromApi() {
          return this.client.loadArticles().then((articles) => {
            this.model.setArticles(articles);
            this.displayArticles();
          });
        }
      };
      module.exports = NewsView;
    }
  });

  // index.js
  var Client = require_newsClient();
  var Model = require_newsModel();
  var View = require_newsView();
  var model = new Model();
  var client = new Client();
  var view = new View(model, client);
  view.displayArticlesFromApi();
})();
