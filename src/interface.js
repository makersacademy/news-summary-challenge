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

function apiSummarise(id, url) {
  let req = `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${url}`
  var summary = ''

  fetch(req, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json())
      .then(json => {
        addSummary(id, json.sentences.join(" "))
      });

  return summary;
};

function addSummary(id, summary) {
  stories.currentList[id].summary = summary;
};

function getEmojiData(data) {
  return fetch('https://makers-emojify.herokuapp.com/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({text: data })
  })
}

function populateItems() {
  let content = ''
  stories.currentList.forEach(story => content += createItem(story))
  document.getElementById("content").innerHTML = content
}

function createItem(item) {
  return `<a href="#${item.id}"><div class="item">
  <p class="info">${item.section}</p>
  <img src="${item.thumbnail}">
  <br>
  <h3>${item.headline}</h3>
  <p class="info">${item.date} ${item.time}</p>
  </div></a>`
};

window.addEventListener("hashchange", displayItem);
document.getElementById("home").addEventListener("click", function() {
  populateItems();
  document.getElementById("content").style.display = 'grid'
  window.location.hash = ''
});

//Gets the id from the url hash
function displayItem() {
  showItem(parseInt(window.location.hash.split("#")[1]));
};

function showItem(id) {
  if (Number.isInteger) {
    document.getElementById("content").innerHTML = formatItem(id);
    document.getElementById("content").style.display = 'block'
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

