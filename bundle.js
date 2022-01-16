(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // env.js
  var require_env = __commonJS({
    "env.js"(exports, module) {
      var apisKeys = {
        guardianApiKey: "042cb5d2-ab93-46e7-a79b-9a785e2cc1e0"
      };
      module.exports = apisKeys;
    }
  });

  // guardianApi.js
  var require_guardianApi = __commonJS({
    "guardianApi.js"(exports, module) {
      var { guardianApiKey } = require_env();
      var GuardianApi2 = class {
        loadArticles(callback) {
          fetch(`https://content.guardianapis.com/search?show-fields=headline%2Cthumbnail%2CtrailText&api-key=${guardianApiKey}`).then((response) => response.json()).then((data) => {
            callback(data.response.results);
          });
        }
      };
      module.exports = GuardianApi2;
    }
  });

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
        }
        setArticles(callback) {
          this.api.loadArticles((articles) => {
            this.model.setArticles(articles);
            callback();
          });
        }
        displayArticles() {
          const articles = this.model.articles;
          const main = document.querySelector("#main");
          for (let article of articles) {
            let articleContainer = document.createElement("div");
            articleContainer.className = "article";
            let img = document.createElement("img");
            img.src = article.fields.thumbnail;
            let headline = document.createElement("h2");
            headline.innerText = article.fields.headline;
            headline.style.cursor = "pointer";
            let hiddenContent = document.createElement("div");
            hiddenContent.setAttribute("hidden", "");
            hiddenContent.className = "hidden";
            let summary = document.createElement("p");
            summary.innerHTML = article.fields.trailText;
            let link = document.createElement("a");
            link.innerText = "Go to Guardian full article";
            link.href = article.webUrl;
            hiddenContent.append(summary, link);
            articleContainer.append(img, headline, hiddenContent);
            main.append(articleContainer);
          }
          this.setHeadlinesClickEvent();
        }
        setHeadlinesClickEvent() {
          const headlines = document.querySelectorAll("main .article h2");
          headlines.forEach((headline) => {
            headline.addEventListener("click", () => {
              const div = headline.nextSibling;
              div.toggleAttribute("hidden");
            });
          });
        }
        clearArticles() {
        }
      };
      module.exports = ArticlesView2;
    }
  });

  // index.js
  var GuardianApi = require_guardianApi();
  var ArticlesModel = require_articlesModel();
  var ArticlesView = require_articlesView();
  var api = new GuardianApi();
  var model = new ArticlesModel();
  var view = new ArticlesView(model, api);
  view.setArticles(() => {
    view.displayArticles();
  });
})();
