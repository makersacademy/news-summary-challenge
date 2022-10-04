(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/articlesModel.js
  var require_articlesModel = __commonJS({
    "src/articlesModel.js"() {
    }
  });

  // src/articlesView.js
  var require_articlesView = __commonJS({
    "src/articlesView.js"(exports, module) {
      var ArticlesView2 = class {
        constructor(api2) {
          this.api = api2;
        }
        loadArticles = () => {
          this.api.getArticles(
            (response) => {
              console.log(response);
            },
            (error) => {
              console.log(error);
            }
          );
        };
      };
      module.exports = ArticlesView2;
    }
  });

  // apiKey.js
  var require_apiKey = __commonJS({
    "apiKey.js"(exports, module) {
      var API_KEY = "gDVZVg6YSTXr6z3KCiVstB3XgJuOSx2G";
      module.exports = API_KEY;
    }
  });

  // src/newYorkTimesApi.js
  var require_newYorkTimesApi = __commonJS({
    "src/newYorkTimesApi.js"(exports, module) {
      var API_KEY = require_apiKey();
      var NewYorkTimesApi2 = class {
        constructor() {
          this.url = "https://api.nytimes.com/svc/topstories/v2/";
          this.apiKey = `?api-key=${API_KEY}`;
        }
        getArticles(resolve, reject) {
          this.getArticlesHome(resolve, reject);
        }
        getArticlesHome(resolve, reject) {
          const path = "home.json";
          const url = this.url + path + this.apiKey;
          fetch("url").then((response) => resolve(response)).catch((error) => reject(error));
        }
      };
      module.exports = NewYorkTimesApi2;
    }
  });

  // index.js
  var ArticlesModel = require_articlesModel();
  var ArticlesView = require_articlesView();
  var NewYorkTimesApi = require_newYorkTimesApi();
  var api = new NewYorkTimesApi();
  var view = new ArticlesView(api);
  view.loadArticles();
})();
