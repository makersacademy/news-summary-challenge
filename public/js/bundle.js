(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/newsFeed.js
  var require_newsFeed = __commonJS({
    "src/newsFeed.js"(exports, module) {
      var newsFeed2 = class {
        constructor() {
          this.stories = [];
        }
        addToStories(articles) {
          this.stories.push(articles);
        }
        displayAll() {
          return this.stories;
        }
        findStory(id) {
          return this.stories[0][id];
        }
      };
      module.exports = newsFeed2;
    }
  });

  // src/getFeed.js
  var require_getFeed = __commonJS({
    "src/getFeed.js"(exports, module) {
      var newsFeed2 = require_newsFeed();
      var getFeed2 = (feedUrl, callback, feedName) => {
        fetch(`${feedUrl}`).then((response) => response.json()).then((jsonResponse) => {
          let results = jsonResponse["response"]["results"];
          callback(results);
          feedName.addToStories(results);
        });
      };
      module.exports = {
        getFeed: getFeed2
      };
    }
  });

  // src/article.js
  var require_article = __commonJS({
    "src/article.js"(exports, module) {
      var Article = class {
        constructor(id) {
          this.id = id;
        }
      };
      module.exports = Article;
    }
  });

  // src/displayFeed.js
  var require_displayFeed = __commonJS({
    "src/displayFeed.js"(exports, module) {
      var Article = require_article();
      var newsFeed2 = require_newsFeed();
      var displayFeed2 = (fetchedData) => {
        feedEl = document.getElementById("feedRequest");
        fetchedData.forEach((story) => {
          let storyEl = document.createElement("article");
          let storyImg = document.createElement("img");
          let storyLink = document.createElement("a");
          let categoryTag = document.createElement("p");
          let categoryURL = document.createElement("a");
          let authorName = document.createElement("p");
          let readStory = document.createElement("button");
          let storyTitle = story["webTitle"];
          storyEl.className = "storyCard";
          storyImg.className = "storyThumb";
          let storyCount = document.querySelectorAll(".storyCard").length;
          storyEl.id = storyCount;
          categoryURL.href = `https://www.theguardian.com/${story["sectionId"]}`;
          storyLink.href = story["webUrl"];
          authorName.textContent = `Author: ${story["tags"][0]["webTitle"]}`;
          categoryURL.textContent = `Category: ${story["sectionName"]}`;
          storyLink.textContent = storyTitle;
          readStory.textContent = "Click to read full story";
          readStory.id = storyCount;
          readStory.setAttribute("onclick", `replyClick(${storyCount})`);
          storyImg.src = story["fields"]["thumbnail"];
          categoryTag.appendChild(categoryURL);
          storyEl.appendChild(storyImg);
          storyEl.appendChild(categoryTag);
          storyEl.appendChild(storyLink);
          storyEl.appendChild(authorName);
          storyEl.appendChild(readStory);
          feedEl.appendChild(storyEl);
        });
      };
      module.exports = {
        displayFeed: displayFeed2
      };
    }
  });

  // index.js
  var { getFeed } = require_getFeed();
  var { displayFeed } = require_displayFeed();
  var newsFeed = require_newsFeed();
  var allStoriesBtn = document.getElementById("allStoriesButton");
  feed = new newsFeed();
  getFeed("https://content.guardianapis.com/search?q=debate%20AND%20economy&api-key=test&show-fields=body,headline,thumbnail&show-tags=contributor", displayFeed, feed);
  allStoriesBtn.addEventListener("click", () => {
    feedEl = document.getElementById("feedRequest");
    feedEl.innerHTML = "";
    getFeed("https://content.guardianapis.com/search?q=debate%20AND%20economy&api-key=test&show-fields=body,headline,thumbnail&show-tags=contributor", displayFeed, feed);
  });
})();
