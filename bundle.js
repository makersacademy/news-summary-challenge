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
          this.news = [];
        }
        getNews() {
          return this.news;
        }
        setNews(news) {
          this.news = news.response.results;
        }
      };
      module.exports = NewsModel2;
    }
  });

  // apiKey.js
  var require_apiKey = __commonJS({
    "apiKey.js"(exports, module) {
      var apiKey2 = "51e4f98e-9e18-400e-976d-184636abdc47";
      module.exports = apiKey2;
    }
  });

  // newsClient.js
  var require_newsClient = __commonJS({
    "newsClient.js"(exports, module) {
      var apiKey2 = require_apiKey();
      var NewsClient2 = class {
        loadNews(callback) {
          fetch(`https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey2}`).then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = NewsClient2;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var NewsView2 = class {
        constructor(model2, client2) {
          this.model = model2;
          this.client = client2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayNews() {
          this.loadNewsFromApi().then(() => {
            return this.model.getNews();
          }).then((stories) => {
            stories.forEach((story) => {
              const image = document.createElement("img");
              const news = document.createElement("div");
              const link = document.createElement("a");
              news.className = "news";
              news.textContent = story.webTitle;
              image.src = story.fields.thumbnail;
              link.href = story.webUrl;
              link.target = "_blank";
              link.textContent = news.webTitle;
              news.appendChild(image);
              news.appendChild(link);
              this.mainContainerEl.appendChild(news);
            });
          });
        }
        loadNewsFromApi() {
          return new Promise((resolve) => {
            this.client.loadNews(
              (news) => {
                this.model.setNews(news);
                resolve();
              }
            );
          });
        }
        showNews() {
          this.loadNewsFromApi().then(() => console.log(this.model.getNews()));
        }
      };
      module.exports = NewsView2;
    }
  });

  // index.js
  var NewsModel = require_newsModel();
  var NewsClient = require_newsClient();
  var NewsView = require_newsView();
  var apiKey = require_apiKey();
  var client = new NewsClient();
  var model = new NewsModel();
  var view = new NewsView(model, client);
  view.displayNews();
})();
