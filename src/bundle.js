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
          this.guardianSearchEndpoint = "http://content.guardianapis.com/search";
        }
        fetchNews(callback) {
          fetch(this.makersAPIURL + this.guardianSearchEndpoint).then((response) => response.json().then((data) => {
            callback(data);
          }));
        }
      };
      module.exports = Client2;
    }
  });

  // src/index.js
  var Client = require_client();
  var client = new Client();
  client.fetchNews((data) => {
    console.log(data);
  });
})();
