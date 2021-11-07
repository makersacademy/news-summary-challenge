(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/client.js
  var require_client = __commonJS({
    "src/client.js"(exports, module) {
      var Client2 = class {
        constructor() {
          this.makersAPIURL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=";
          this.guardianSearchEndpoint = "http://content.guardianapis.com/search?show-fields=thumbnail";
        }
        fetchNews() {
          return fetch(this.makersAPIURL + this.guardianSearchEndpoint).then((response) => response.json().then((data) => {
            return data;
          }));
        }
      };
      module.exports = Client2;
    }
  });

  // src/presenter.js
  var require_presenter = __commonJS({
    "src/presenter.js"(exports, module) {
      var Presenter2 = class {
        constructor(results) {
          this.results = results;
        }
        createHeadlines() {
          const newsSection = document.getElementById("headlines");
          this.results.forEach((result, index) => {
            let resultDiv = document.createElement("div");
            resultDiv.id = `hl-${index}`;
            let headline = document.createElement("h1");
            headline.textContent = result.webTitle;
            let img = document.createElement("img");
            img.src = result.fields.thumbnail;
            resultDiv.appendChild(headline);
            resultDiv.appendChild(img);
            newsSection.appendChild(resultDiv);
          });
        }
      };
      module.exports = Presenter2;
    }
  });

  // src/index.js
  var Client = require_client();
  var Presenter = require_presenter();
  var client = new Client();
  var run = async () => {
    const data = await client.fetchNews();
    const presenter = new Presenter(data.response.results);
    presenter.createHeadlines();
    const newsSection = document.getElementById("headlines");
    newsSection.addEventListener("click", (event) => {
      let parentElementId = event.target.parentElement.attributes.id.value;
      if (parentElementId == false) {
        console.log(parentElementId);
      }
    });
  };
  run();
})();
