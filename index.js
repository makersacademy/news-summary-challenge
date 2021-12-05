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
const pageResponse = document.querySelector("#full_response");

const setContent = (data) => {
  topTenResults = data.response.results;
  topTenResults.forEach((result) => displayElement(result));
  // pageResponse.innerText = JSON.stringify(topTenResults);
};

const displayElement = (result) => {
  let newDiv = document.createElement("div");
  pageContent.appendChild(newDiv);

  let newEl = document.createElement("a");
  newEl.innerText = result.webTitle;
  newEl.href = result.webUrl;
  newDiv.appendChild(newEl);
};

const getContent = (callback) => {
  fetch(
    `https://content.guardianapis.com/search?from-date=2021-12-05&q=raab&api-key=${GuardianAPI}`
  )
    .then((response) => response.json())
    .then((data) => callback(data));
};

getContent(setContent);
