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
      populateItems();
    });

};

function populateItems() {
  let content = ''
  stories.currentList.forEach(story => content += createItem(story))
  document.getElementById("content").innerHTML = content
}

function createItem(item) {
  return `<a href="#${item.id}"><div class="item">
  <img src="${item.thumbnail}">
  <br>
  <h3>${item.headline}</h3>
  <p class"info">${item.section} > ${item.date} > ${item.time}</p>
  </div></a>`
};

changeTheURL();

function changeTheURL() {
  //Event listener for url change
  window.addEventListener("hashchange", displayItem);
}

//Gets the id from the url hash
function displayItem() {
  showItem(parseInt(window.location.hash.split("#")[1]));
};

function showItem(id) {
  if (Number.isInteger) {
    console.log(id)
    document.getElementById("content").innerHTML = formatItem(id);
  }
};

function formatItem(id) {
  let story = stories.currentList[id]
  return `<div class="item-large">
  <img src="${story.thumbnail}">
  <br>
  <h3>${story.headline}</h3>
  <br>
  <p>${story.text}</p>`
};

function saveStories() {

};

function clearLocalStorage() {

};

function getStory(id) {

};

