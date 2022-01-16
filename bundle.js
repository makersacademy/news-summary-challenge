(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var NewsApi2 = class {
        loadNews(callback) {
          fetch("https://content.guardianapis.com/search?page=1&api-key=98e51f22-b91b-4a89-b784-aa14c541dfed&show-fields=thumbnail,body").then((responseAnswer) => responseAnswer.json()).then((data) => {
            callback(data);
          }).catch((error) => {
            console.error("ERROR", error);
          });
        }
      };
      module.exports = NewsApi2;
    }
  });

  // newsModel.js
  var require_newsModel = __commonJS({
    "newsModel.js"(exports, module) {
      var NewsModel2 = class {
        constructor() {
          this.newsInfo = [];
        }
        getNewsInfo() {
          return this.newsInfo;
        }
        addNewsInfo(data) {
          this.newsInfo.push(data);
        }
      };
      module.exports = NewsModel2;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var NewsView2 = class {
        constructor(model2) {
          this.model = model2;
        }
        displayNewsSummary() {
          const newsData = this.model.getNewsInfo();
          newsData.forEach((newsItem) => {
            this.displayHeadline(newsItem);
            this.displayViewArticleButton(newsItem);
            this.displayImage(newsItem);
          });
        }
        displayHeadline(data) {
          this.headlinesContainerEl = document.querySelector("#headline-container");
          const headlineEl = document.createElement("div");
          headlineEl.className = "headline";
          headlineEl.style.cssText = "font-size:25px";
          const linkEl = document.createElement("a");
          linkEl.innerText = data["headline"];
          linkEl.href = data["link"];
          headlineEl.append(linkEl);
          this.headlinesContainerEl.append(headlineEl);
        }
        displayViewArticleButton(data) {
          this.headlinesContainerEl = document.querySelector("#headline-container");
          const viewArticleButtonEl = document.createElement("button");
          viewArticleButtonEl.innerText = "View Article";
          this.headlinesContainerEl.append(viewArticleButtonEl);
          viewArticleButtonEl.addEventListener("click", () => {
            console.log("Clicked on event");
            this.displayArticle({ "body": data["body"] });
          });
        }
        displayImage(data) {
          this.headlinesContainerEl = document.querySelector("#headline-container");
          const imageEl = document.createElement("img");
          imageEl.className = "headlineImage";
          imageEl.src = data["thumbnail"];
          this.headlinesContainerEl.append(imageEl);
        }
        displayArticle(data) {
          this.headlinesContainerEl = document.querySelector("#article-container");
          this.headlinesContainerEl.innerHTML = null;
          const articleEl = document.createElement("p");
          articleEl.className = "article";
          articleEl.innerHTML = data["body"];
          this.headlinesContainerEl.append(articleEl);
        }
      };
      module.exports = NewsView2;
    }
  });

  // index.js
  var NewsApi = require_newsApi();
  var NewsModel = require_newsModel();
  var NewsView = require_newsView();
  api = new NewsApi();
  api.loadNews();
  model = new NewsModel();
  view = new NewsView(model);
  api.loadNews((newsData) => {
    newsData.response.results.forEach((element) => {
      model.addNewsInfo({ "headline": element.webTitle, "thumbnail": element.fields.thumbnail, "body": element.fields.body, "link": element.webUrl });
    });
    view.displayNewsSummary();
  });
  console.log(model.getNewsInfo());
})();
