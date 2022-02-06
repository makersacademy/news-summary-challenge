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
          this.images = [];
        }
      };
      module.exports = NewsModel2;
    }
  });

  // apiKey.js
  var require_apiKey = __commonJS({
    "apiKey.js"(exports, module) {
      var apiKey = `f9aa2f1d-3dc8-4b90-9652-db8eea680ff9`;
      module.exports = apiKey;
    }
  });

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var apiKey = require_apiKey();
      var NewsApi2 = class {
        getNews(searchTerm, callback) {
          fetch(`https://content.guardianapis.com/search?q=${searchTerm}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`).then((response) => response.json()).then((data) => {
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
        constructor(newsModel2, newsApi2) {
          this.newsModel = newsModel2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl = document.querySelector("#search-button");
          this.inputEl = document.querySelectorAll("#search-input");
          this.buttonEl.addEventListener("click", () => {
            const searchTerm = document.querySelector("#search-input").value;
            console.log(searchTerm);
            newsApi2.getNews(searchTerm, (headlines) => {
              newsModel2.reset();
              console.log(headlines);
              newsModel2.addHeadlines(headlines);
              newsModel2.addLinks(headlines);
              newsModel2.addImages(headlines);
              this.displayNews();
            });
            this.inputEl.value = "";
          });
        }
        displayNews() {
          const headlines = this.newsModel.getHeadlines();
          const links = this.newsModel.getLinks();
          const images = this.newsModel.getImages();
          const articlesArray = [];
          headlines.forEach((headline) => {
            const newsEl = document.createElement("div");
            const index = headlines.indexOf(headline);
            const a = document.createElement("a");
            const linkText = document.createTextNode(headline);
            const img = document.createElement("img");
            const lineBreak = document.createElement("br");
            newsEl.className = "headline";
            a.appendChild(linkText);
            a.title = headline;
            a.href = links[index];
            img.src = images[index];
            img.className = "image";
            newsEl.appendChild(a);
            newsEl.append(lineBreak);
            newsEl.appendChild(img);
            articlesArray.push(newsEl);
          });
          this.mainContainerEl.replaceChildren(...articlesArray);
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
  var newsView = new NewsView(newsModel, newsApi);
  console.log("The news app is running");
  newsApi.getNews("", (headlines) => {
    console.log(headlines);
    newsModel.addHeadlines(headlines);
    newsModel.addLinks(headlines);
    newsModel.addImages(headlines);
    newsView.displayNews();
  });
})();
