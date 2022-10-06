(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/articlesModel.js
  var require_articlesModel = __commonJS({
    "src/articlesModel.js"(exports, module) {
      var ArticlesModel2 = class {
        constructor() {
          this.articles = [];
        }
        setArticles(data) {
          this.articles = data;
        }
        getArticles() {
          return this.articles;
        }
        getSearchArticles(searchInput) {
          const filteredArticles = this.articles.filter((article) => {
            const titleAndAbstract = article.title + " " + article.abstract;
            return titleAndAbstract.toLowerCase().includes(searchInput.toLowerCase());
          });
          return filteredArticles;
        }
      };
      module.exports = ArticlesModel2;
    }
  });

  // src/articlesView.js
  var require_articlesView = __commonJS({
    "src/articlesView.js"(exports, module) {
      var ArticlesView2 = class {
        constructor() {
          this.articlesContainerEl = document.querySelector("#articles-container");
          this.resetButton = document.querySelector("#reset-button");
          this.searchButton = document.querySelector("#search-button");
          this.searchInput = document.querySelector("#search-query");
        }
        displayArticles = (articles) => {
          this.#clearArticles();
          for (let i = 0; i < articles.length; i += 2) {
            const rowEl = document.createElement("div");
            rowEl.className = "row";
            rowEl.append(this.#getArticleColumnDiv(articles[i], i));
            if (articles[i + 1]) {
              rowEl.append(this.#getArticleColumnDiv(articles[i + 1], i + 1));
            }
            this.articlesContainerEl.append(rowEl);
          }
        };
        addSearchEventHandler = (callback) => {
          this.searchButton.addEventListener("click", () => {
            callback(this.searchInput.value);
          });
        };
        addResetEventHandler = (callback) => {
          this.resetButton.addEventListener("click", () => {
            this.searchInput.value = "";
            callback();
          });
        };
        #clearArticles = () => {
          var first = this.articlesContainerEl.firstElementChild;
          while (first) {
            first.remove();
            first = this.articlesContainerEl.firstElementChild;
          }
        };
        #getArticleColumnDiv = (article, index) => {
          const columnEl = document.createElement("div");
          columnEl.className = "col-sm-6";
          const cardEl = document.createElement("div");
          cardEl.className = "card mb-3";
          cardEl.append(this.#getImageEl(article.multimedia[0]));
          cardEl.append(this.#getBodyEl(article, index));
          columnEl.append(cardEl);
          return columnEl;
        };
        #getBodyEl(article, index) {
          const bodyEl = document.createElement("div");
          bodyEl.className = "card-body";
          bodyEl.id = "article-" + (index + 1);
          bodyEl.append(this.#getTitleEl(article.title));
          bodyEl.append(this.#getSectionEl(article.section));
          bodyEl.append(this.#getDateEl(article.published_date));
          bodyEl.append(this.#getBylineEl(article.byline));
          bodyEl.append(this.#getLinkEl(article.url));
          bodyEl.append(this.#getAbstractEl(article.abstract));
          return bodyEl;
        }
        #getTitleEl(title) {
          const titleEl = document.createElement("h6");
          titleEl.className = "card-title";
          titleEl.textContent = title;
          return titleEl;
        }
        #getAbstractEl(abstract) {
          const abstractEl = document.createElement("p");
          abstractEl.className = "card-text";
          abstractEl.textContent = abstract;
          return abstractEl;
        }
        #getSectionEl(section) {
          const sectionEl = document.createElement("p");
          sectionEl.className = "card-text mb-0";
          const sectionSmall = document.createElement("small");
          sectionSmall.className = "text-muted";
          sectionSmall.textContent = section.toUpperCase();
          sectionEl.append(sectionSmall);
          return sectionEl;
        }
        #getDateEl(date) {
          const dateEl = document.createElement("p");
          dateEl.className = "card-text mb-0";
          const dateSmall = document.createElement("small");
          dateSmall.className = "text-muted";
          dateSmall.textContent = this.#formatDate(date);
          dateEl.append(dateSmall);
          return dateEl;
        }
        #formatDate(date) {
          const day = date.split("T")[0];
          const time = date.split("T")[1].split("-")[0].slice(0, 5);
          return day + " " + time;
        }
        #getBylineEl(byline) {
          const bylineEl = document.createElement("p");
          bylineEl.className = "card-text mb-0";
          const bylineSmall = document.createElement("small");
          bylineSmall.className = "text-muted";
          bylineSmall.textContent = byline;
          bylineEl.append(bylineSmall);
          return bylineEl;
        }
        #getLinkEl(url) {
          const wrapperEl = document.createElement("p");
          wrapperEl.className = "card-text";
          const smallEl = document.createElement("small");
          const linkEl = document.createElement("a");
          linkEl.href = url;
          linkEl.textContent = "LINK";
          smallEl.append(linkEl);
          wrapperEl.append(smallEl);
          return wrapperEl;
        }
        #getImageEl(imageObj) {
          const imageEl = document.createElement("img");
          imageEl.className = "card-img-top mt-4 mx-auto";
          imageEl.src = imageObj.url;
          imageEl.alt = imageObj.caption;
          imageEl.style.width = "200px";
          return imageEl;
        }
      };
      module.exports = ArticlesView2;
    }
  });

  // apiKey.js
  var require_apiKey = __commonJS({
    "apiKey.js"(exports, module) {
      var API_KEY = "gDVZVg6YSTXr6z3KCiVstB3XgJuOSx2G";
      module.exports = API_KEY;
    }
  });

  // src/newYorkTimesApi.js
  var require_newYorkTimesApi = __commonJS({
    "src/newYorkTimesApi.js"(exports, module) {
      var API_KEY = require_apiKey();
      var NewYorkTimesApi2 = class {
        constructor() {
          this.url = "https://api.nytimes.com/svc/topstories/v2/";
          this.apiKey = `?api-key=${API_KEY}`;
        }
        async getArticles() {
          const articles = await this.getArticlesHome();
          return articles;
        }
        async getArticlesHome() {
          const path = "home.json";
          const url = this.url + path + this.apiKey;
          const articles = await fetch(url).then((res) => res.json());
          return articles.results;
        }
      };
      module.exports = NewYorkTimesApi2;
    }
  });

  // src/articlesController.js
  var require_articlesController = __commonJS({
    "src/articlesController.js"(exports, module) {
      var ArticlesController2 = class {
        constructor(model2, view2, api2) {
          this.model = model2;
          this.view = view2;
          this.api = api2;
          this.#addSearchEventHandler();
          this.#addResetEventHandler();
        }
        loadArticles = async () => {
          try {
            const data = await this.api.getArticles();
            this.model.setArticles(data);
            const articles = this.model.getArticles();
            this.view.displayArticles(articles);
          } catch (error) {
            console.log(error);
          }
        };
        #addSearchEventHandler = () => {
          this.view.addSearchEventHandler(this.#loadSearchArticles);
        };
        #loadSearchArticles = async (searchInput) => {
          try {
            const data = await this.api.getArticles();
            this.model.setArticles(data);
            const articles = this.model.getSearchArticles(searchInput);
            this.view.displayArticles(articles);
          } catch (error) {
            console.log(error);
          }
        };
        #addResetEventHandler = () => {
          this.view.addResetEventHandler(this.loadArticles);
        };
      };
      module.exports = ArticlesController2;
    }
  });

  // index.js
  var ArticlesModel = require_articlesModel();
  var ArticlesView = require_articlesView();
  var NewYorkTimesApi = require_newYorkTimesApi();
  var ArticlesController = require_articlesController();
  var api = new NewYorkTimesApi();
  var view = new ArticlesView();
  var model = new ArticlesModel();
  var controller = new ArticlesController(model, view, api);
  controller.loadArticles();
})();
