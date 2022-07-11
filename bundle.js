(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // apiview.js
  var require_apiview = __commonJS({
    "apiview.js"(exports, module) {
      var retrieve = require_api();
      var apiView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          const searchFrom = document.querySelector(".search");
          const input = document.querySelector(".input");
          const newsList = document.querySelector(".news-list");
          searchFrom.addEventListener("submit", retrieve);
        }
        displayNews;
      };
      module.exports = apiView2;
    }
  });

  // api.js
  var require_api = __commonJS({
    "api.js"(exports, module) {
      apiView = require_apiview();
      async function retrieve(search) {
        const apiKey = "c56ade02-1dfc-40b9-979d-edf2e8c11027";
        let result = search.value;
        let url = `https://content.guardianapis.com/search?q=${result}&api-key=${apiKey}`;
        const payload = await fetch(url);
        const JSON = await payload.json();
        return JSON.response?.results;
      }
      module.exports = retrieve;
    }
  });

  // apimodel.js
  var require_apimodel = __commonJS({
    "apimodel.js"() {
    }
  });

  // index.js
  var api = require_api();
  var apiViews = require_apiview();
  var Apimodel = require_apimodel();
  var Gapi = new Api();
  var model = new Apimodel();
  var view = new apiViews();
})();
