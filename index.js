console.log("Initiated index.js");
const GuardianAPI = require("./.env");

//------------------------------------------
// Setting the title
//------------------------------------------
const pageTitle = document.querySelector("#title");
pageTitle.innerText = "Welcome to the news!";

//------------------------------------------
// Setting the content
//------------------------------------------
const pageContent = document.querySelector("#content");
const pageResponse = document.querySelector("#full_response");

const setContent = (res) => {
  pageResponse.innerText = JSON.stringify(res.response.content);
  console.log(`webTitle: ${res.response.content.webTitle}`);
  console.log(`body: ${res.response.content.fields.body}`);
  pageContent.innerText = JSON.stringify(res);
};

const getContent = (callback) => {
  fetch(
    `http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key=${GuardianAPI}`
  ).then((response) => {
    response.json().then((res) => {
      callback(res);
    });
  });
};

getContent(setContent);
