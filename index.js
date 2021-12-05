console.log("Initiated index.js");
const GuardianAPI = require("./.env");
const getContent = require("./lib/getContent");

//------------------------------------------
// Setting the title
//------------------------------------------
const pageTitle = document.querySelector("#title");
const pageSubTitle = document.querySelector("#subtitle");

pageTitle.innerText = "Guardian search";
pageSubTitle.innerText =
  "Search today's Guardian for articles related to search terms.";

//------------------------------------------
// Setting the content
//------------------------------------------
const pageContent = document.querySelector("#content");

const setContent = (data) => {
  pageContent.innerHTML = "";
  topTenResults = data.response.results;
  topTenResults.forEach((result) => displayElement(result));
};

const displayElement = (result) => {
  let newDiv = document.createElement("div");
  pageContent.appendChild(newDiv);

  let newEl = document.createElement("a");
  newEl.innerText = result.webTitle;
  newEl.href = result.webUrl;
  newDiv.appendChild(newEl);
};

const getSearchValue = (rawVal) => {
  splitVal = rawVal.split(" ");
  return splitVal.join("%20");
};

//------------------------------------------
// Event listeners
//------------------------------------------
const searchButton = document.querySelector("#searchButton");
const searchInput = document.querySelector("#searchInput");

searchButton.addEventListener("click", () => {
  searchValue = getSearchValue(searchInput.value);
  getContent(searchInput.value, setContent, GuardianAPI);
});
