console.log("Initiated index.js");
const GuardianAPI = require("./.env");

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

const getContent = (search, callback) => {
  if (search === "") return null;
  fetch(
    `https://content.guardianapis.com/search?from-date=2021-12-05&q=${search}&api-key=${GuardianAPI}`
  )
    .then((response) => response.json())
    .then((data) => callback(data));
};

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
  getContent(searchInput.value, setContent);
});
