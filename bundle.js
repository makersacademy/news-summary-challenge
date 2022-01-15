(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var NewsApi2 = class {
        loadNews() {
          fetch("http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key=98e51f22-b91b-4a89-b784-aa14c541dfed").then((responseAnswer) => responseAnswer.json()).then((data) => console.log(data.response));
        }
      };
      module.exports = NewsApi2;
    }
  });

  // index.js
  var NewsApi = require_newsApi();
  api = new NewsApi();
  api.loadNews();
})();
