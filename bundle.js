(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // headlines.js
  var require_headlines = __commonJS({
    "headlines.js"(exports, module) {
      var Headlines2 = class {
        constructor() {
          this.response = null;
          this.mainContainerEl = document.querySelector("#main-container");
          this.newsElements = null;
          this.newsObjects = [];
        }
        getByNewest = () => {
          return fetch(`https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&api-key=${API_KEY}`).then((res) => res.json()).then((res) => {
            this.response = res.response.results;
            return res.response.results;
          });
        };
        displayNews = (data) => {
          for (let item of data) {
            let newsEl = document.createElement("div");
            newsEl.append(item.webTitle);
            newsEl.className = "news";
            let newImg = document.createElement("img");
            newImg.className = "thumbnail";
            if (item.fields != void 0) {
              newImg.src = item.fields.thumbnail;
            }
            this.mainContainerEl.append(newsEl);
            let linebreak = document.createElement("br");
            newsEl.append(linebreak);
            newsEl.append(newImg);
          }
          this.newsElements = document.querySelectorAll(".news");
        };
        addSummaryLink = () => {
          for (let item = 0; item < this.newsElements.length; item++) {
            let newsObj = {
              id: this.response[item].id,
              apiUrl: this.response[item].apiUrl,
              webUrl: this.response[item].webUrl
            };
            this.newsObjects.push(newsObj);
            this.newsElements[item].addEventListener("click", () => {
              location.hash = newsObj.id;
            });
          }
        };
        getText = (html) => {
          let tmp = document.createElement("div");
          tmp.innerHTML = html;
          return tmp.textContent || tmp.innerText;
        };
        showSummary = () => {
          window.addEventListener("hashchange", () => {
            let api_tmp = null;
            let web_tmp = null;
            for (let i = 0; i < this.newsObjects.length; i++) {
              const summaryEls = document.getElementsByClassName("summary");
              while (summaryEls.length > 0)
                summaryEls[0].remove();
              if ("#" + this.newsObjects[i].id == location.hash) {
                api_tmp = this.newsObjects[i].apiUrl;
                web_tmp = this.newsObjects[i].webUrl;
                this.getSummary(api_tmp, web_tmp);
              }
            }
          }, false);
        };
        getSummary = (api_tmp, web_tmp) => {
          return fetch(`${api_tmp}?show-fields=body&api-key=${API_KEY}`).then((res) => res.json()).then((res) => {
            let rawText = res.response.content.fields.body;
            let summary = this.getText(rawText);
            return summary.substring(0, 1500);
          }).then((summary) => {
            let summaryEl = document.createElement("div");
            summaryEl.className = "summary";
            let readmoreEl = document.createElement("a");
            readmoreEl.href = web_tmp;
            readmoreEl.innerHTML = "Click here to read more";
            summaryEl.append(summary + `...
`);
            summaryEl.append(document.createElement("br"));
            summaryEl.append(readmoreEl);
            for (let i = 0; i < this.newsObjects.length; i++) {
              if ("#" + this.newsObjects[i].id == location.hash) {
                this.newsElements[i].append(summaryEl);
              }
            }
          });
        };
      };
      module.exports = Headlines2;
    }
  });

  // index.js
  var Headlines = require_headlines();
  var headlines = new Headlines();
  headlines.getByNewest().then((data) => headlines.displayNews(data)).then(() => headlines.addSummaryLink()).then(() => headlines.showSummary());
})();
