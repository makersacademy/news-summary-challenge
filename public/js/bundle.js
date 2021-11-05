(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/getFeed.js
  var require_getFeed = __commonJS({
    "src/getFeed.js"(exports, module) {
      var getFeed2 = (feedUrl, callback) => {
        fetch(`${feedUrl}`).then((response) => response.json()).then((jsonResponse) => {
          console.log(jsonResponse);
          callback(jsonResponse["response"]["results"]);
        });
      };
      module.exports = {
        getFeed: getFeed2
      };
    }
  });

  // src/displayFeed.js
  var require_displayFeed = __commonJS({
    "src/displayFeed.js"(exports, module) {
      var displayFeed2 = (fetchedData) => {
        feedEl = document.getElementById("feedRequest");
        fetchedData.forEach((story) => {
          let storyEl = document.createElement("p");
          let storyImg = document.createElement("img");
          let storyLink = document.createElement("a");
          let categoryTag = document.createElement("p");
          let categoryURL = document.createElement("a");
          categoryURL.href = `https://www.theguardian.com/${story["sectionId"]}`;
          storyEl.className = "storyCard";
          storyImg.classname = "storyThumb";
          categoryURL.innerText = `Category: ${story["sectionName"]}`;
          storyLink.href = story["webUrl"];
          storyImg.src = story["fields"]["thumbnail"];
          let storyTitle = story["webTitle"];
          storyLink.textContent = storyTitle;
          categoryTag.appendChild(categoryURL);
          storyEl.appendChild(storyImg);
          storyEl.appendChild(categoryTag);
          storyEl.appendChild(storyLink);
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
  getFeed("https://content.guardianapis.com/search?page=1&api-key=test&show-fields=body,headline,thumbnail", displayFeed);
})();
