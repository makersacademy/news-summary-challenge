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
        getArticles() {
          return this.articles;
        }
        addArticle(article) {
          this.articles.push(article);
        }
        setArticles(articles) {
          articles.response.results.forEach((article) => this.addArticle(article));
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
        }
        displayArticles() {
          const articleDivs = document.querySelector(".article");
          if (articleDivs !== null) {
            articleDivs.forEach((article) => {
              article.remove();
            });
          }
          const articles = this.model.getArticles();
          articles.forEach((article) => {
            const div = document.createElement("div");
            const headline = document.createElement("a");
            headline.text = article.webTitle;
            headline.href = `#${article.id}`;
            const imgDiv = document.createElement("div");
            const img = document.createElement("img");
            img.src = article.fields.thumbnail;
            imgDiv.append(img);
            div.append(headline);
            div.append(imgDiv);
            div.className = "article";
            this.mainContainerEl.append(div);
          });
        }
      };
      module.exports = ArticlesView2;
    }
  });

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var NewsApi2 = class {
        loadArticles(url, callback) {
          fetch(url).then((response) => response.json()).then((data) => callback(data)).catch((error) => {
            console.error(error);
          });
        }
        loadSummary(url, callback) {
          fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${url}`).then((response) => response.json()).then((data) => callback(data)).catch((error) => {
            console.error(error);
          });
        }
      };
      module.exports = NewsApi2;
    }
  });

  // index.js
  var ArticlesModel = require_articlesModel();
  var ArticlesView = require_articlesView();
  var NewsApi = require_newsApi();
  var api = new NewsApi();
  var model = new ArticlesModel();
  var view = new ArticlesView(model, api);
  var allArticlesUrl = "https://content.guardianapis.com/search?YOUR-API-KEY-HERE&show-fields=thumbnail";
  var singleArticleUrl = "?YOUR-API-KEY-HERE&show-fields=thumbnail";
  var getContent = (fragmentId, callback) => {
    if (fragmentId === "home") {
      api.loadArticles(allArticlesUrl, (articles) => {
        model.setArticles(articles);
        view.displayArticles();
      });
    } else {
      api.loadArticles(`https://content.guardianapis.com/${fragmentId}${singleArticleUrl}`, (article) => {
        const summaryUrl = article.response.content.webUrl;
        console.log(`Fetching summary from ${summaryUrl}...`);
        api.loadSummary(summaryUrl, (summary) => {
          callback(summary.text);
        });
      });
    }
  };
  var loadContent = () => {
    const contentDiv = document.getElementById("main-container");
    const fragmentId = location.hash.substr(1);
    getContent(fragmentId, (content) => {
      contentDiv.innerHTML = content;
    });
  };
  if (!location.hash) {
    location.hash = "#home";
  }
  loadContent();
  window.addEventListener("hashchange", loadContent);
})();
