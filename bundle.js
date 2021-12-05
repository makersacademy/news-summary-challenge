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
  var pageSubTitle = document.querySelector("#subtitle");
  pageTitle.innerText = "Guardian search";
  pageSubTitle.innerText = "Search today's Guardian for articles related to search terms.";
  var pageContent = document.querySelector("#content");
  var getContent = (search, callback) => {
    if (search === "")
      return null;
    fetch(`https://content.guardianapis.com/search?from-date=2021-12-05&q=${search}&api-key=${GuardianAPI}`).then((response) => response.json()).then((data) => callback(data));
  };
  var setContent = (data) => {
    pageContent.innerHTML = "";
    topTenResults = data.response.results;
    topTenResults.forEach((result) => displayElement(result));
  };
  var displayElement = (result) => {
    let newDiv = document.createElement("div");
    pageContent.appendChild(newDiv);
    let newEl = document.createElement("a");
    newEl.innerText = result.webTitle;
    newEl.href = result.webUrl;
    newDiv.appendChild(newEl);
  };
  var getSearchValue = (rawVal) => {
    splitVal = rawVal.split(" ");
    return splitVal.join("%20");
  };
  var searchButton = document.querySelector("#searchButton");
  var searchInput = document.querySelector("#searchInput");
  searchButton.addEventListener("click", () => {
    searchValue = getSearchValue(searchInput.value);
    getContent(searchInput.value, setContent);
  });
})();
