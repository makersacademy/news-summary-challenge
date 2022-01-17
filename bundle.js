var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// newsApi.js
var require_newsApi = __commonJS({
  "newsApi.js"(exports, module2) {
    var NewsApi2 = class {
      getArticles(callback, apiKey = API_KEY) {
        fetch(`https://content.guardianapis.com/search?api-key=${apiKey}&type=article&show-fields=thumbnail&show-fields=all`).then((response) => response.json()).then((data) => callback(data.response.results)).catch((error) => console.log(error));
      }
    };
    module2.exports = NewsApi2;
  }
});

// newsAppModel.js
var require_newsAppModel = __commonJS({
  "newsAppModel.js"(exports, module2) {
    var newsAppModel = class {
      constructor() {
        this.articles = [];
      }
      addArticle(article) {
        this.articles.push(article);
      }
      getSummary(article) {
        let body = article.fields.body.split("<p>");
        let text = body.map((paragraph) => {
          let splitText = paragraph.split("</p>");
          return splitText[0];
        });
        return text.slice(1, 3);
      }
      setArticles(articleArray) {
        for (const article of articleArray) {
          this.articles.push(article);
        }
      }
    };
    module2.exports = newsAppModel;
  }
});

// newsAppView.js
var require_newsAppView = __commonJS({
  "newsAppView.js"(exports, module2) {
    var NewsAppView2 = class {
      constructor(model3, api2) {
        this.model = model3;
        this.api = api2;
        this.mainContainerEl = document.querySelector("#main-container");
      }
      loadArticles() {
        this.api.getArticles((articles) => {
          model.setArticles(articles);
        });
      }
      displayArticles() {
        let articles = this.model.articles;
        let id = 0;
        for (const article of articles) {
          let newArticle = document.createElement("div");
          newArticle.className = "article";
          newArticle.setAttribute("id", id);
          this.createHeadline(article, newArticle, id);
          this.createImage(article, newArticle, id);
          newArticle.addEventListener("click", this.addSummary);
          id++;
          this.mainContainerEl.appendChild(newArticle);
        }
      }
      addSummary = (thingClicked) => {
        this.clearSummaries();
        let id = thingClicked.target.id;
        let summary = document.createElement("div");
        summary.className = "summary";
        let text = this.model.getSummary(this.model.articles[id]);
        for (const element of text) {
          let paragraph = document.createElement("p");
          paragraph.innerHTML = element;
          summary.appendChild(paragraph);
        }
        let parentElement = document.querySelectorAll(".article")[id];
        parentElement.appendChild(summary);
      };
      createHeadline(article, parentElement, id) {
        let headline = document.createElement("h2");
        headline.innerText = article.webTitle;
        headline.setAttribute("id", id);
        parentElement.appendChild(headline);
      }
      createImage(article, parentElement, id) {
        let image = document.createElement("img");
        image.setAttribute("src", article.fields.thumbnail);
        image.setAttribute("id", id);
        parentElement.appendChild(image);
      }
      clearSummaries() {
        let summaries = document.querySelectorAll(".summary");
        for (const summary of summaries) {
          summary.remove();
        }
      }
    };
    module2.exports = NewsAppView2;
  }
});

// index.js
var NewsApi = require_newsApi();
var NewsAppModel = require_newsAppModel();
var NewsAppView = require_newsAppView();
var api = new NewsApi();
var model2 = new NewsAppModel();
var view = new NewsAppView(model2, api);
api.getArticles((articles) => {
  model2.setArticles(articles);
  view.displayArticles();
});
