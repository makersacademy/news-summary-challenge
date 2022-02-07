(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // apiKey.js
  var require_apiKey = __commonJS({
    "apiKey.js"(exports, module) {
      var API_KEY = "85d273bb-00eb-44b5-807a-cde162f4470d";
      module.exports = API_KEY;
    }
  });

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var API_KEY = require_apiKey();
      var NewsApi2 = class {
        loadArticles(callback) {
          fetch(`https://content.guardianapis.com/search?page=1&q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${API_KEY}`).then((response) => response.json()).then((data) => {
            callback(data.response.results);
          }).catch((error) => console.log(error));
        }
      };
      module.exports = NewsApi2;
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
          return this.articles;
        }
        addArticle(article) {
          this.articles.push(article);
        }
      };
      module.exports = NewsModel;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var NewsModel = require_newsModel();
      var NewsView = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.mainContainer = document.querySelector("#main-container");
        }
        displayArticles() {
          const articles = this.model.getArticles();
          articles.forEach((article) => {
            const div = document.createElement("div");
            div.className = "article";
            const headline = document.createElement("h1");
            const img = document.createElement("img");
            const link = document.createElement("a");
            link.setAttribute("href", article.webUrl);
            headline.textContent = article.webTitle;
            img.src = article.fields.thumbnail;
            div.appendChild(img);
            link.appendChild(headline);
            div.appendChild(link);
            this.mainContainer.appendChild(div);
          });
        }
      };
      module.exports = NewsView;
    }
  });

  // index.js
  var NewsApi = require_newsApi();
  var NotesModel = require_newsModel();
  var NotesView = require_newsView();
  var api = new NewsApi();
  var model = new NotesModel();
  var view = new NotesView(model, api);
  api.loadArticles((articles) => {
    articles.forEach((article) => {
      model.addArticle(article);
    });
    view.displayArticles();
  });
  view.displayArticles();
  console.log(model.getArticles());
})();
