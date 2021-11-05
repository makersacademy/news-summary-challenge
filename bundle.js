(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/getHeadlines.js
  var require_getHeadlines = __commonJS({
    "src/getHeadlines.js"(exports, module) {
      getHeadlines = () => {
        fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body").then((response) => response.json()).then((jsonData) => {
          console.log(jsonData);
        });
      };
      module.exports = getHeadlines;
    }
  });

  // index.js
  var getHeadline = require_getHeadlines();
  getHeadline();
})();
