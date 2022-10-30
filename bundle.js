(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/ArticlesModel.js
  var require_ArticlesModel = __commonJS({
    "src/ArticlesModel.js"(exports, module) {
      var ArticlesModel2 = class {
        constructor() {
          this.articles = [];
        }
        getArticles() {
          return this.articles;
        }
        addArticle(article) {
          article.forEach((a) => {
            this.articles.push(a);
          });
        }
        reset() {
          this.articles = [];
        }
      };
      module.exports = ArticlesModel2;
    }
  });

  // src/ArticlesView.js
  var require_ArticlesView = __commonJS({
    "src/ArticlesView.js"(exports, module) {
      var ArticlesView2 = class {
        constructor(model2, api) {
          this.model = model2;
          this.api = api;
          this.articlesFromModel = this.model.getArticles();
          this.newsFeed = document.querySelector("#news-feed");
          this.clearFeedBtn = document.querySelector("#clear-feed-button");
          this.refreshBtn = document.querySelector("#refresh-button");
          this.searchInput = document.querySelector("#search-input");
          this.allHeadlines = [document.querySelectorAll("h1")];
          this.clearFeedBtn.addEventListener("click", () => {
            this.clearFeed();
          });
          this.searchInput.addEventListener("input", (e) => {
            const searchInput = e.target.value.toLowerCase();
            const filteredArticles = this.articlesFromModel.filter((article) => {
              return article.webTitle.toLowerCase().includes(searchInput);
            });
            this.clearFeed();
            this.displayArticles(filteredArticles);
          });
        }
        displayArticlesFromApi() {
          this.api.loadArticles(
            (repoData) => {
              this.model.addArticle(repoData.response.results);
              this.displayArticles(this.articlesFromModel);
            },
            () => {
              this.displayError();
            }
          );
        }
        displayArticles(articles) {
          articles.forEach((article) => {
            this.addImage(article);
            this.addHeadline(article);
          });
        }
        addHeadline(article) {
          const h1 = document.createElement("h1");
          h1.className = "news-title";
          h1.innerText = article.webTitle;
          h1.onclick = () => {
            window.location.href = article.webUrl;
          };
          this.newsFeed.append(h1);
        }
        addImage(article) {
          const img = document.createElement("img");
          img.className = "news-image";
          img.setAttribute("id", article.id);
          img.src = article.fields.thumbnail;
          img.onclick = () => {
            window.location.href = article.webUrl;
          };
          this.newsFeed.append(img);
        }
        displayError() {
          let errorMessage = document.createElement("div");
          errorMessage.className = "error";
          errorMessage.textContent = "Oops, something went wrong!";
          this.newFeed.append(errorMessage);
        }
        clearFeed() {
          const images = document.querySelectorAll("img.news-image");
          images.forEach((element) => {
            element.remove();
          });
          const headlines = document.querySelectorAll("h1.news-title");
          headlines.forEach((element) => {
            element.remove();
          });
        }
      };
      module.exports = ArticlesView2;
    }
  });

  // src/GuardianApi.js
  var require_GuardianApi = __commonJS({
    "src/GuardianApi.js"(exports, module) {
      var GuardianApi2 = class {
        constructor() {
          this.apiURL = `https://content.guardianapis.com/search?api-key=${apikey}&show-fields=thumbnail`;
        }
        loadArticles(callback) {
          fetch(this.apiURL).then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = GuardianApi2;
    }
  });

  // index.js
  console.log("the app is running");
  var ArticlesModel = require_ArticlesModel();
  var ArticlesView = require_ArticlesView();
  var GuardianApi = require_GuardianApi();
  var client = new GuardianApi();
  var model = new ArticlesModel();
  var view = new ArticlesView(model, client);
  view.displayArticlesFromApi();
})();
