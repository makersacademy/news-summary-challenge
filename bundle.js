(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // env.js
  var require_env = __commonJS({
    "env.js"(exports, module) {
      var API_KEY2 = "042cb5d2-ab93-46e7-a79b-9a785e2cc1e0";
      module.exports = API_KEY2;
    }
  });

  // index.js
  var API_KEY = require_env();
  fetch(`https://content.guardianapis.com/search?api-key=${API_KEY}`).then((response) => response.json()).then((data) => {
    console.log(data.response.results);
  });
})();
