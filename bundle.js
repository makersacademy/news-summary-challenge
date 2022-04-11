(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // guardianNewsApi.js
  var require_guardianNewsApi = __commonJS({
    "guardianNewsApi.js"(exports, module) {
      var GuardianNewsApi = class {
        async loadNews(searchTerm) {
          const response = await fetch(`https://content.guardianapis.com/search?q=${searchTerm}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=51ac3d32-cbc5-4ed5-92c9-7c0d2a78c31c`);
          const data = await response.json();
          console.log(response);
          return data.response.results;
        }
      };
      module.exports = GuardianNewsApi;
    }
  });

  // guardianNewsView.js
  var require_guardianNewsView = __commonJS({
    "guardianNewsView.js"(exports, module) {
      var GuardianNewsApi = require_guardianNewsApi();
      var GuardianNewsView = class {
        constructor(api = new GuardianNewsApi()) {
          this.api = api;
          const searchButton = document.querySelector("#search-button");
          searchButton.addEventListener("click", () => {
            this.searchNews();
          });
        }
        async searchNews() {
          const searchValue = document.querySelector("#user-input").value;
          const data = await this.api.loadNews(searchValue);
          this.displayNews(data);
        }
        displayNews(data) {
          const clearNews = document.querySelectorAll(".news");
          clearNews.forEach((article) => article.remove());
          const newsDataArray = data;
          newsDataArray.forEach((newsArticle) => {
            const newsList = document.querySelector("#news-list");
            const article = document.createElement("div");
            const title = document.createElement("a");
            const image = document.createElement("img");
            const br1 = document.createElement("br");
            const br2 = document.createElement("br");
            const br3 = document.createElement("br");
            title.href = newsArticle.webUrl;
            title.innerText = newsArticle.fields.headline;
            image.src = newsArticle.fields.thumbnail;
            newsList.append(article);
            article.className = "news";
            article.append(title);
            article.append(br1);
            article.append(image);
            article.append(br2);
            article.append(br3);
          });
        }
      };
      module.exports = GuardianNewsView;
    }
  });

  // index.js
  var NewsApi = require_guardianNewsApi();
  var NewsView = require_guardianNewsView();
  var newsApi = new NewsApi();
  var newsView = new NewsView(newsApi);
  newsView.searchNews();
})();
