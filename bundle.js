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
        addStory(story) {
          this.stories.push(story);
        }
      };
      module.exports = HeadlineModel2;
    }
  });

  // headlineView.js
  var require_headlineView = __commonJS({
    "headlineView.js"(exports, module) {
      var HeadlineView2 = class {
        constructor(model2) {
          this.mainContainerEl = document.querySelector("#main-container");
          this.model = model2;
        }
        displayStories() {
          let stories = this.model.getStories();
          stories.forEach((story) => {
            const div = document.createElement("div");
            div.className = "story";
            const h2 = document.createElement("h2");
            h2.className = "headline";
            h2.innerText = story["headline"];
            div.append(h2);
            this.mainContainerEl.append(div);
          });
        }
      };
      module.exports = HeadlineView2;
    }
  });

  // index.js
  var HeadlineModel = require_headlineModel();
  var HeadlineView = require_headlineView();
  var model = new HeadlineModel();
  var view = new HeadlineView(model);
  model.addStory({ "headline": "Pig's seen flying over Billericay" });
  view.displayStories();
})();
