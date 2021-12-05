(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // .env.js
  var require_env = __commonJS({
    ".env.js"(exports, module) {
      var myGuardianAPI = "1067ce9e-422c-4d84-bfb3-f223c38a8ed5";
      module.exports = myGuardianAPI;
    }
  });

  // index.js
  console.log("Initiated index.js");
  var GuardianAPI = require_env();
  var pageTitle = document.querySelector("#title");
  pageTitle.innerText = "Welcome to the news!";
  var pageContent = document.querySelector("#content");
  var pageResponse = document.querySelector("#full_response");
  var setContent = (res) => {
    pageResponse.innerText = JSON.stringify(res.response.content);
    let subRes = JSON.stringify(res.response.content);
    console.log(`webTitle: ${res.response.content.webTitle}`);
    console.log(`body: ${res.response.content.fields.body}`);
    pageContent.innerText = JSON.stringify(res);
  };
  var getContent = (callback) => {
    fetch(`http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key=${GuardianAPI}`).then((response) => {
      console.log(response);
      response.json().then((res) => {
        console.log(res);
        callback(res);
      });
    });
  };
  getContent(setContent);
})();
