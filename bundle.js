(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // newsSummaryApis.js
  var require_newsSummaryApis = __commonJS({
    "newsSummaryApis.js"(exports, module) {
      var NewsSummaryApis2 = class {
        loadHeadlines(callback) {
          let today = new Date();
          let fullYear = today.getFullYear();
          let month = today.getMonth() + 1;
          let day = today.getDate();
          fetch(`http://content.guardianapis.com/search?section=politics&from-date=${fullYear}-${month}-${day}&show-fields=thumbnail&api-key=57a064c8-a210-43c5-968c-ef56d259a38d`).then((response) => response.json()).then((data) => callback(data)).catch((error) => console.error(error));
        }
      };
      module.exports = NewsSummaryApis2;
    }
  });

  // newsSummaryView.js
  var require_newsSummaryView = __commonJS({
    "newsSummaryView.js"(exports, module) {
      var NewsSummaryView2 = class {
        constructor(api2) {
          this.api = api2;
          this.newsContainer = document.querySelector("#news-container");
        }
        displayNews(newsData) {
          console.log(newsData);
          let newsInfoArray = newsData.response.results;
          newsInfoArray.forEach((result) => {
            const sectionEl = document.createElement("section");
            const h3El = document.createElement("h3");
            const figureEl = document.createElement("figure");
            const imgEl = document.createElement("img");
            sectionEl.className = "section";
            figureEl.className = "image is-16by9";
            imgEl.src = result.fields.thumbnail;
            h3El.innerText = result.webTitle;
            h3El.className = "title is-3 margin mt-3 is-flex is-justify-content-center";
            figureEl.appendChild(imgEl);
            sectionEl.appendChild(figureEl);
            sectionEl.appendChild(h3El);
            this.newsContainer.append(sectionEl);
          });
        }
      };
      module.exports = NewsSummaryView2;
    }
  });

  // index.js
  var NewsSummaryApis = require_newsSummaryApis();
  var NewsSummaryView = require_newsSummaryView();
  var api = new NewsSummaryApis();
  var view = new NewsSummaryView(api);
  api.loadHeadlines((newsData) => {
    view.displayNews(newsData);
  });
})();
