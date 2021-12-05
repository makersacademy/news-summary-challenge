(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/fetchApi.js
  var require_fetchApi = __commonJS({
    "src/fetchApi.js"(exports, module) {
      var fetchGardiansApi2 = (callback) => {
        fetch("https://content.guardianapis.com/search?page=1&api-key=test&show-fields=headline,thumbnail,body").then((response) => response.json()).then((data) => {
          console.log("Success:", data);
          callback(data);
        }).catch((error) => {
          console.error("Error:", error);
        });
      };
      module.exports = fetchGardiansApi2;
    }
  });

  // src/displayContent.js
  var require_displayContent = __commonJS({
    "src/displayContent.js"(exports, module) {
      var displayContent2 = (data) => {
        const headlines = document.getElementById("headlines");
        headlines.innerHTML = "";
        let results = data.response.results;
        results.forEach((result) => {
          let articleLink = document.createElement("a");
          let articleEl = document.createElement("article");
          let articleHeadline = document.createElement("h2");
          let articleImg = document.createElement("img");
          articleEl.className = "article";
          articleImg.className = "article-img";
          articleHeadline.innerText = result.webTitle;
          articleLink.href = result.webUrl;
          articleImg.src = result.fields.thumbnail;
          articleEl.append(articleImg);
          articleEl.append(articleHeadline);
          articleLink.append(articleEl);
          headlines.append(articleLink);
        });
      };
      module.exports = displayContent2;
    }
  });

  // index.js
  var fetchGardiansApi = require_fetchApi();
  var displayContent = require_displayContent();
  fetchGardiansApi(displayContent);
})();
