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

function clearLocalStorage() {

};

//Adds first page to the stories object
function getInitialStories() {
  apiGetPage(1);
};

//Requests page of stories (10 items) from the guardian api returning the results in an array
function apiGetPage(pageID) {
 let results = ''
 let req = `https://content.guardianapis.com/search?page=${pageID}&type=article&show-fields=body,thumbnail&api-key=test`
 fetch(req).then(response => response.json())
  .then(json => {
      let results = json.response.results
      stories.addPage(results)
  });
};

function saveStories() {

};

function getStory(id) {

};

