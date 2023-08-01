// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.

console.log('Hello from the developer console!');

const GuardianAPI = require('./guardianAPI');
const newsModel = require('./newsModel');
const newsView = require('./newsView');
const api = new GuardianAPI();
const model = new newsModel();
const view = new newsView(model, api);

console.log(model.getNews());

const pageContent = document.querySelector('#content');

const setContent = (data) => {
    pageContent.innerHTML = "";
    topTenResults = data.response.results;
    topTenResults.forEach((result) => displayElement(result));

};

let newEl = document.createElement("a");
  newEl.innerText = result.webTitle;
  newEl.href = result.webUrl;
  newDiv.appendChild(newEl);



fetch('https://content.guardianapis.com/search')
    .then(res => console.log(res))