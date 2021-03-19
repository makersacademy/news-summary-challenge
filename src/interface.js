'use strict'

//Resets stories object
let stories = new Stories();

//Waits untill the document has loaded
var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

//Clears local storage and fetches first page of stories (first 10 items)
ready(() => {
  clearLocalStorage();
  getInitialStories();
});

//Adds first page to the stories object
function getInitialStories() {
  apiGetPage(1);
};

//Requests page of stories (10 items) from the guardian api and store them in stories object
function apiGetPage(pageID) {
 let req = `https://content.guardianapis.com/search?page=${pageID}&type=article&show-fields=body,thumbnail&api-key=test`

 fetch(req)
 .then(response => response.json())
    .then(json => {
      let results = json.response.results
      stories.addPage(results)
      populateHTML();
    });

};

function populateHTML() {
  let content = ''
  stories.currentList.forEach(story => content += createItem(story))
  document.getElementById("content").innerHTML = content
}

function createItem(item) {
  return `<div class="item"><img src="${item.thumbnail}" height=75% width=90%><br><h3>${item.headline}<h3></div>`
}

function saveStories() {

};

function clearLocalStorage() {

};

function getStory(id) {

};

