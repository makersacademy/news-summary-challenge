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
          this.headlines = [];
          this.links = [];
          this.images = [];
        }
        getHeadlines() {
          return this.headlines;
        }
        getLinks() {
          return this.links;
        }
        getImages() {
          return this.images;
        }
        addHeadlines(stories) {
          stories.forEach((story) => {
            this.headlines.push(story.webTitle);
          });
        }
        addLinks(stories) {
          stories.forEach((story) => {
            this.links.push(story.webUrl);
          });
        }
        addImages(stories) {
          stories.forEach((story) => {
            this.images.push(story.fields.thumbnail);
          });
        }
        reset() {
          this.headlines = [];
          this.links = [];
        }
      };
      module.exports = NewsModel2;
    }
  });

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var NewsApi2 = class {
        getNews(callback) {
          fetch("https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=test").then((response) => response.json()).then((data) => {
            callback(data.response.results);
          });
        }
      };
      module.exports = NewsApi2;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var NewsView2 = class {
        constructor(newsModel2) {
          this.newsModel = newsModel2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayNews() {
          const headlines = this.newsModel.getHeadlines();
          const links = this.newsModel.getLinks();
          const images = this.newsModel.getImages();
          headlines.forEach((headline) => {
            const newsEl = document.createElement("div");
            const index = headlines.indexOf(headline);
            const a = document.createElement("a");
            const linkText = document.createTextNode(headline);
            const img = document.createElement("img");
            const lineBreak = document.createElement("br");
            a.appendChild(linkText);
            a.title = headline;
            a.href = links[index];
            img.src = images[index];
            newsEl.appendChild(img);
            newsEl.append(lineBreak);
            newsEl.appendChild(a);
            newsEl.className = "headline";
            this.mainContainerEl.append(newsEl);
          });
        }
      };
      module.exports = NewsView2;
    }
  });

  // index.js
  var NewsModel = require_newsModel();
  var NewsApi = require_newsApi();
  var NewsView = require_newsView();
  var newsModel = new NewsModel();
  var newsApi = new NewsApi();
  var newsView = new NewsView(newsModel);
  console.log("The news app is running");
  newsApi.getNews((headlines) => {
    console.log(headlines);
    newsModel.addHeadlines(headlines);
    newsModel.addLinks(headlines);
    newsModel.addImages(headlines);
    newsView.displayNews();
  });
})();
