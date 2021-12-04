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
      module.exports = { getFeed: getFeed2 };
    }
  });

  // src/displayFeed.js
  var require_displayFeed = __commonJS({
    "src/displayFeed.js"(exports, module) {
      var displayFeed2 = (fetchedData) => {
        feedElement = document.getElementById("feedRequest");
        fetchedData.forEach((article) => {
          let articleElement = document.createElement("p");
          let articleContent = article["webTitle"];
          articleElement.textContent = articleContent;
          feedElement.appendChild(articleElement);
        });
      };
      module.exports = { displayFeed: displayFeed2 };
    }
  });

  // index.js
  var { getFeed } = require_getFeed();
  var { displayFeed } = require_displayFeed();
  getFeed("https://content.guardianapis.com/search?q=Cricket&api-key=test", displayFeed);
})();
