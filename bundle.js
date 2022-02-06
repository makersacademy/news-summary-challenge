(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // index.js
  var require_news_summary_challenge = __commonJS({
    "index.js"(exports, module) {
      var Index = class {
        hello() {
          console.log("Hello");
          return "Hello!";
        }
      };
      var index = new Index();
      return index.hello();
      module.exports = Index;
    }
  });
  require_news_summary_challenge();
})();
