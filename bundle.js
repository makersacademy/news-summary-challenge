(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // headlineModel.js
  var require_headlineModel = __commonJS({
    "headlineModel.js"(exports, module) {
      var HeadlineModel2 = class {
        constructor() {
          this.stories = [];
        }
        getStories() {
          return this.stories;
        }
        setStories(data) {
          this.stories = [];
          const results = data["response"]["results"];
          results.forEach((story) => {
            this.stories.push({
              "thumbnail": story["fields"]["thumbnail"],
              "headline": story["fields"]["headline"],
              "url": story["webUrl"]
            });
          });
        }
      };
      module.exports = HeadlineModel2;
    }
  });

  // guardianApi.js
  var require_guardianApi = __commonJS({
    "guardianApi.js"(exports, module) {
      var GuardianApi2 = class {
        constructor() {
          this.toFetch = "https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=test";
        }
        loadStories(callback, addOn = "") {
          fetch(this.toFetch + addOn).then((response) => response.json()).then((data) => {
            console.log(data);
            callback(data);
          });
        }
      };
      module.exports = GuardianApi2;
    }
  });

  // headlineView.js
  var require_headlineView = __commonJS({
    "headlineView.js"(exports, module) {
      var HeadlineView2 = class {
        constructor(model2, api2) {
          this.mainContainerEl = document.querySelector("#main-container");
          this.model = model2;
          this.api = api2;
          this.searchButtonEl = document.querySelector("#search-button");
          this.searchButtonEl.addEventListener("click", () => {
            this.viewReset();
            const searchTerm = document.querySelector("#search-input").value;
            this.api.loadStories((stories) => {
              this.model.setStories(stories);
              this.displayStories();
            }, `&q=${searchTerm}`);
          });
          this.resetButtonEl = document.querySelector("#reset-button");
          this.resetButtonEl.addEventListener("click", () => {
            this.viewReset();
            this.api.loadStories((stories) => {
              this.model.setStories(stories);
              this.displayStories();
            });
          });
        }
        displayStories() {
          let stories = this.model.getStories();
          stories.forEach((story) => {
            const div = document.createElement("div");
            div.className = "story";
            const img = document.createElement("img");
            img.className = "thumbnail";
            img.src = story["thumbnail"];
            div.append(img);
            div.append(document.createElement("br"));
            const a = document.createElement("a");
            a.className = "headline";
            const link = document.createTextNode(story["headline"]);
            a.append(link);
            a.title = story["headline"];
            a.href = story["url"];
            div.append(a);
            div.append(document.createElement("br"));
            this.mainContainerEl.append(div);
          });
        }
        viewReset() {
          this.mainContainerEl.remove();
          this.mainContainerEl = document.createElement("div");
          document.body.append(this.mainContainerEl);
        }
      };
      module.exports = HeadlineView2;
    }
  });

  // index.js
  var HeadlineModel = require_headlineModel();
  var GuardianApi = require_guardianApi();
  var HeadlineView = require_headlineView();
  var model = new HeadlineModel();
  var api = new GuardianApi();
  var view = new HeadlineView(model, api);
  api.loadStories((stories) => {
    model.setStories(stories);
    view.displayStories();
  });
})();
