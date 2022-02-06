(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var url = "https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=test";
      var NewsApi2 = class {
        retrieveNewsData(callback) {
          fetch(url).then((response) => response.json()).then((data) => callback(data));
        }
      };
      module.exports = NewsApi2;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var NewsView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayNews(newsData) {
          console.log(newsData);
          const news_array = this.model.getNews(newsData);
          for (const newsItem of news_array) {
            const article_wrapper = document.createElement("div");
            article_wrapper.innerHTML = `
            <h2>${newsItem.webTitle}</h2>
            
            <div class = "img_wrapper">
              <img src = "${newsItem.fields.thumbnail}"/>
            </div>
            `;
            article_wrapper.className = "article_wrapper";
            this.mainContainerEl.append(article_wrapper);
          }
        }
      };
      module.exports = NewsView2;
    }
  });

  // newsModel.js
  var require_newsModel = __commonJS({
    "newsModel.js"(exports, module) {
      var NewsModel2 = class {
        constructor() {
        }
        getNews(newsData) {
          const news_array = newsData.response.results;
          console.log(news_array);
          return news_array;
        }
      };
      module.exports = NewsModel2;
    }
  });

  // index.js
  var NewsApi = require_newsApi();
  var NewsView = require_newsView();
  var NewsModel = require_newsModel();
  var api = new NewsApi();
  var view = new NewsView();
  var model = new NewsModel();
  api.retrieveNewsData((newsData) => {
    view.displayNews(newsData);
  });
})();
