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
          let articleImage = document.createElement("img");
          let articleURL = document.createElement("a");
          let articleTitle = article["webTitle"];
          articleURL.href = article["webUrl"];
          articleImage.src = article["fields"]["thumbnail"];
          articleURL.textContent = articleTitle;
          articleElement.appendChild(articleImage);
          articleElement.appendChild(articleURL);
          feedElement.appendChild(articleElement);
        });
      };
      module.exports = { displayFeed: displayFeed2 };
    }
  });

  // index.js
  var { getFeed } = require_getFeed();
  var { displayFeed } = require_displayFeed();
  getFeed("https://content.guardianapis.com/search?q=Cricket&api-key=test&show-fields=body,headline,thumbnail", displayFeed);
})();
