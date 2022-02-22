(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/feed.js
  var require_feed = __commonJS({
    "src/feed.js"(exports, module) {
      var Feed2 = class {
        constructor() {
          this.headlines = [];
        }
        fetchHeadlines = (apiKey2, callback) => {
          let alignment = "";
          let id = 0;
          fetch(`https://content.guardianapis.com/search?q=headlines&api-key=${apiKey2}&show-fields=body,headline,thumbnail`).then((response) => response.json()).then((jsonData) => {
            console.log(jsonData);
            jsonData.response.results.forEach((headline) => {
              console.log(headline.fields.thumbnail);
              this.headlines.push(headline);
              document.querySelectorAll(`.split left boxes`).length < 5 ? alignment = "left" : alignment = "right";
              callback(alignment, headline);
            });
          });
        };
        addHeadline = (alignment, headline) => {
          let newPost = document.createElement("div");
          let headlineImage = document.createElement("img");
          let newId = document.querySelectorAll(`.split ${alignment} boxes`).length + 1;
          headlineImage.src = headline.fields.thumbnail;
          newPost.className = `split ${alignment} boxes`;
          newPost.id = `${alignment}-${newId}`;
          newPost.innerHTML = `${headlineImage} ${headline.fields.headline}`;
          console.log(`.split ${alignment}`);
          document.querySelector(`.split`).appendChild(newPost);
        };
      };
      module.exports = Feed2;
    }
  });

  // index.js
  var Feed = require_feed();
  var feed = new Feed();
  var apiKey = "eb3d861f-2043-4a4c-b13e-1909896dd0cf";
  console.log(apiKey);
  feed.fetchHeadlines(apiKey, feed.addHeadline);
})();
