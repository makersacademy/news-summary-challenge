(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // apiKey.js
  var require_apiKey = __commonJS({
    "apiKey.js"(exports, module) {
      module.exports = "687c0d2e-76a4-43c2-9701-d60275fbbfa8";
    }
  });

  // guardianApi.js
  var require_guardianApi = __commonJS({
    "guardianApi.js"(exports, module) {
      var apiKey = require_apiKey();
      var GuardianApi2 = class {
        loadHeadlines(searchText, callback, errorCallBack) {
          console.log(searchText);
          const url = `https://content.guardianapis.com/search?q=${searchText}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`;
          fetch(url).then((response) => response.json()).then((data) => {
            callback(data);
          }).catch((error) => {
            console.log("error:", error);
            errorCallBack(error);
          });
        }
      };
      module.exports = GuardianApi2;
    }
  });

  // modelNews.js
  var require_modelNews = __commonJS({
    "modelNews.js"(exports, module) {
      var ModelNews2 = class {
        constructor() {
          this.news = [];
        }
        getNews() {
          return this.news;
        }
        addNews(news) {
          this.news.push(news);
        }
        setNews(news) {
          this.news = news;
        }
        resetModel() {
          this.news = [];
        }
      };
      module.exports = ModelNews2;
    }
  });

  // viewNews.js
  var require_viewNews = __commonJS({
    "viewNews.js"(exports, module) {
      var NewsModel = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.newsArray = [];
          this.maincontainerEl = document.querySelector("#main-container");
          this.inputEl = document.querySelector("#input-search");
          this.searchButtonEl = document.querySelector("#search-button");
          this.searchButtonEl.addEventListener("click", () => {
            this.resetPage();
            console.log(this.inputEl.value);
            this.displayNewsFromApi();
          });
        }
        resetPage() {
          document.querySelectorAll("a.headline").forEach((news) => {
            console.log("I am in constructor");
            news.remove();
          });
          document.querySelectorAll("img.photo").forEach((news) => {
            console.log("I am in constructor");
            news.remove();
          });
        }
        displayNews() {
          this.resetPage();
          const news = this.model.getNews();
          news.forEach((news2) => {
            const newsEl = document.createElement("a");
            newsEl.className = "headline";
            let linkText = document.createTextNode(news2.fields.headline);
            let lineSpace = document.createElement("br");
            newsEl.href = news2.webUrl;
            document.body.appendChild(newsEl);
            newsEl.appendChild(linkText);
            newsEl.appendChild(lineSpace);
            const imageEl = document.createElement("img");
            imageEl.className = "photo";
            imageEl.src = news2.fields.thumbnail;
            newsEl.append(imageEl);
            this.maincontainerEl.append(newsEl);
          });
        }
        displayNewsFromApi() {
          this.model.resetModel();
          console.log("input text:", this.inputEl.value);
          this.api.loadHeadlines(this.inputEl.value, (recievedData) => {
            const data = recievedData.response.results;
            data.forEach((news) => this.newsArray.push(news));
            this.model.setNews(this.newsArray);
            this.newsArray = [];
            this.displayNews();
          }), () => {
            this.displayError();
          };
        }
        displayError() {
          const oldErrors = document.querySelectorAll("div.error");
          oldErrors.forEach((error) => {
            error.remove();
          });
          let errorEl = document.createElement("div");
          errorEl.innerText = "Oops, something went wrong";
          errorEl.className = "error";
          this.mainContainerEl.append(errorEl);
        }
      };
      module.exports = NewsModel;
    }
  });

  // index.js
  var GuardianApi = require_guardianApi();
  var ModelNews = require_modelNews();
  var ViewNews = require_viewNews();
  var model = new ModelNews();
  var api = new GuardianApi();
  var view = new ViewNews(model, api);
  view.displayNewsFromApi();
})();
