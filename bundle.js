"use strict";
(() => {
  // build/articlesModel.js
  var ArticlesModel = class {
    constructor() {
      this.setArticles = (data) => {
        this.articles = data;
      };
      this.getArticles = () => {
        return this.articles;
      };
      this.getSearchArticles = (searchInput) => {
        if (searchInput == null)
          searchInput = "";
        const filteredArticles = this.articles.filter((article) => {
          const titleAndAbstract = article.title + " " + article.abstract;
          return titleAndAbstract.toLowerCase().includes(searchInput.toLowerCase());
        });
        return filteredArticles;
      };
      this.articles = [];
    }
  };

  // build/articlesView.js
  var __classPrivateFieldGet = function(receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _ArticlesView_clearArticles;
  var _ArticlesView_getArticleColumnDiv;
  var _ArticlesView_getBodyEl;
  var _ArticlesView_getTitleEl;
  var _ArticlesView_getAbstractEl;
  var _ArticlesView_getSectionEl;
  var _ArticlesView_getDateEl;
  var _ArticlesView_formatDate;
  var _ArticlesView_getBylineEl;
  var _ArticlesView_getLinkEl;
  var _ArticlesView_getImageEl;
  var ArticlesView = class {
    constructor() {
      this.displayArticles = (articles) => {
        __classPrivateFieldGet(this, _ArticlesView_clearArticles, "f").call(this);
        for (let i = 0; i < articles.length; i += 2) {
          const rowEl = document.createElement("div");
          rowEl.className = "row";
          rowEl.append(__classPrivateFieldGet(this, _ArticlesView_getArticleColumnDiv, "f").call(this, articles[i], i));
          if (articles[i + 1]) {
            rowEl.append(__classPrivateFieldGet(this, _ArticlesView_getArticleColumnDiv, "f").call(this, articles[i + 1], i + 1));
          }
          this.articlesContainerEl.append(rowEl);
        }
      };
      this.addSearchEventHandler = (callback) => {
        this.searchButton.addEventListener("click", () => {
          callback(this.searchInput.value);
        });
      };
      this.addResetEventHandler = (callback) => {
        this.resetButton.addEventListener("click", () => {
          this.searchInput.value = "";
          callback();
        });
      };
      _ArticlesView_clearArticles.set(this, () => {
        var first = this.articlesContainerEl.firstElementChild;
        while (first) {
          first.remove();
          first = this.articlesContainerEl.firstElementChild;
        }
      });
      _ArticlesView_getArticleColumnDiv.set(this, (article, index) => {
        const columnEl = document.createElement("div");
        columnEl.className = "col-sm-6";
        const cardEl = document.createElement("div");
        cardEl.className = "card mb-3";
        cardEl.append(__classPrivateFieldGet(this, _ArticlesView_getImageEl, "f").call(this, article.multimedia[0]));
        cardEl.append(__classPrivateFieldGet(this, _ArticlesView_getBodyEl, "f").call(this, article, index));
        columnEl.append(cardEl);
        return columnEl;
      });
      _ArticlesView_getBodyEl.set(this, (article, index) => {
        const bodyEl = document.createElement("div");
        bodyEl.className = "card-body";
        bodyEl.id = "article-" + (index + 1);
        bodyEl.append(__classPrivateFieldGet(this, _ArticlesView_getTitleEl, "f").call(this, article.title));
        bodyEl.append(__classPrivateFieldGet(this, _ArticlesView_getSectionEl, "f").call(this, article.section));
        bodyEl.append(__classPrivateFieldGet(this, _ArticlesView_getDateEl, "f").call(this, article.published_date));
        bodyEl.append(__classPrivateFieldGet(this, _ArticlesView_getBylineEl, "f").call(this, article.byline));
        bodyEl.append(__classPrivateFieldGet(this, _ArticlesView_getLinkEl, "f").call(this, article.url));
        bodyEl.append(__classPrivateFieldGet(this, _ArticlesView_getAbstractEl, "f").call(this, article.abstract));
        return bodyEl;
      });
      _ArticlesView_getTitleEl.set(this, (title) => {
        const titleEl = document.createElement("h6");
        titleEl.className = "card-title";
        titleEl.textContent = title;
        return titleEl;
      });
      _ArticlesView_getAbstractEl.set(this, (abstract) => {
        const abstractEl = document.createElement("p");
        abstractEl.className = "card-text";
        abstractEl.textContent = abstract;
        return abstractEl;
      });
      _ArticlesView_getSectionEl.set(this, (section) => {
        const sectionEl = document.createElement("p");
        sectionEl.className = "card-text mb-0";
        const sectionSmall = document.createElement("small");
        sectionSmall.className = "text-muted";
        sectionSmall.textContent = section.toUpperCase();
        sectionEl.append(sectionSmall);
        return sectionEl;
      });
      _ArticlesView_getDateEl.set(this, (date) => {
        const dateEl = document.createElement("p");
        dateEl.className = "card-text mb-0";
        const dateSmall = document.createElement("small");
        dateSmall.className = "text-muted";
        dateSmall.textContent = __classPrivateFieldGet(this, _ArticlesView_formatDate, "f").call(this, date);
        dateEl.append(dateSmall);
        return dateEl;
      });
      _ArticlesView_formatDate.set(this, (date) => {
        const day = date.split("T")[0];
        const time = date.split("T")[1].split("-")[0].slice(0, 5);
        return day + " " + time;
      });
      _ArticlesView_getBylineEl.set(this, (byline) => {
        const bylineEl = document.createElement("p");
        bylineEl.className = "card-text mb-0";
        const bylineSmall = document.createElement("small");
        bylineSmall.className = "text-muted";
        bylineSmall.textContent = byline;
        bylineEl.append(bylineSmall);
        return bylineEl;
      });
      _ArticlesView_getLinkEl.set(this, (url) => {
        const wrapperEl = document.createElement("p");
        wrapperEl.className = "card-text";
        const smallEl = document.createElement("small");
        const linkEl = document.createElement("a");
        linkEl.href = url;
        linkEl.textContent = "LINK";
        smallEl.append(linkEl);
        wrapperEl.append(smallEl);
        return wrapperEl;
      });
      _ArticlesView_getImageEl.set(this, (imageObj) => {
        const imageEl = document.createElement("img");
        imageEl.className = "card-img-top mt-4 mx-auto";
        imageEl.src = imageObj.url;
        imageEl.alt = imageObj.caption;
        imageEl.style.width = "200px";
        return imageEl;
      });
      this.articlesContainerEl = document.querySelector("#articles-container");
      this.resetButton = document.querySelector("#reset-button");
      this.searchButton = document.querySelector("#search-button");
      this.searchInput = document.querySelector("#search-query");
    }
  };
  _ArticlesView_clearArticles = /* @__PURE__ */ new WeakMap(), _ArticlesView_getArticleColumnDiv = /* @__PURE__ */ new WeakMap(), _ArticlesView_getBodyEl = /* @__PURE__ */ new WeakMap(), _ArticlesView_getTitleEl = /* @__PURE__ */ new WeakMap(), _ArticlesView_getAbstractEl = /* @__PURE__ */ new WeakMap(), _ArticlesView_getSectionEl = /* @__PURE__ */ new WeakMap(), _ArticlesView_getDateEl = /* @__PURE__ */ new WeakMap(), _ArticlesView_formatDate = /* @__PURE__ */ new WeakMap(), _ArticlesView_getBylineEl = /* @__PURE__ */ new WeakMap(), _ArticlesView_getLinkEl = /* @__PURE__ */ new WeakMap(), _ArticlesView_getImageEl = /* @__PURE__ */ new WeakMap();

  // build/apiKey.js
  var apiKey = "gDVZVg6YSTXr6z3KCiVstB3XgJuOSx2G";

  // build/newYorkTimesApi.js
  var __awaiter = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var NewYorkTimesApi = class {
    constructor() {
      this.getArticles = () => __awaiter(this, void 0, void 0, function* () {
        const articles = yield this.getArticlesHome();
        return articles;
      });
      this.getArticlesHome = () => __awaiter(this, void 0, void 0, function* () {
        const path = "home.json";
        const url = this.url + path + this.apiKey;
        const articles = yield fetch(url).then((res) => res.json());
        return articles.results;
      });
      this.url = "https://api.nytimes.com/svc/topstories/v2/";
      this.apiKey = `?api-key=${apiKey}`;
    }
  };

  // build/articlesController.js
  var __awaiter2 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __classPrivateFieldGet2 = function(receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _ArticlesController_addSearchEventHandler;
  var _ArticlesController_loadSearchArticles;
  var _ArticlesController_addResetEventHandler;
  var ArticlesController = class {
    constructor(model2, view2, api2) {
      this.loadArticles = () => __awaiter2(this, void 0, void 0, function* () {
        try {
          const data = yield this.api.getArticles();
          this.model.setArticles(data);
          const articles = this.model.getArticles();
          this.view.displayArticles(articles);
        } catch (error) {
          console.log(error);
        }
      });
      _ArticlesController_addSearchEventHandler.set(this, () => {
        this.view.addSearchEventHandler(__classPrivateFieldGet2(this, _ArticlesController_loadSearchArticles, "f"));
      });
      _ArticlesController_loadSearchArticles.set(this, (searchInput) => __awaiter2(this, void 0, void 0, function* () {
        try {
          const data = yield this.api.getArticles();
          this.model.setArticles(data);
          const articles = this.model.getSearchArticles(searchInput);
          this.view.displayArticles(articles);
        } catch (error) {
          console.log(error);
        }
      }));
      _ArticlesController_addResetEventHandler.set(this, () => {
        this.view.addResetEventHandler(this.loadArticles);
      });
      this.model = model2;
      this.view = view2;
      this.api = api2;
      __classPrivateFieldGet2(this, _ArticlesController_addSearchEventHandler, "f").call(this);
      __classPrivateFieldGet2(this, _ArticlesController_addResetEventHandler, "f").call(this);
    }
  };
  _ArticlesController_addSearchEventHandler = /* @__PURE__ */ new WeakMap(), _ArticlesController_loadSearchArticles = /* @__PURE__ */ new WeakMap(), _ArticlesController_addResetEventHandler = /* @__PURE__ */ new WeakMap();

  // build/index.js
  var api = new NewYorkTimesApi();
  var view = new ArticlesView();
  var model = new ArticlesModel();
  var controller = new ArticlesController(model, view, api);
  controller.loadArticles();
})();
