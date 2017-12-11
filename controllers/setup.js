'use strict';

var guardianUrl = ('http://content.guardianapis.com/search?' + 
  'show-fields=thumbnail&section=politics&' +
  'api-key=7f5fb053-eac8-49d7-a376-e04003f57b52'
);

var aylienUrl = ('http://news-summary-api.herokuapp.com/aylien?' +
  'apiRequestUrl=https://api.aylien.com/api/v1/summarize?url='
);

var stories = new Stories();

function getJSON(url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onreadystatechange = function() {
    if ((this.status >= 200) && (this.readyState == 4)) {
      callback(JSON.parse(this.responseText));
    };
  };
  request.send();
};

function displayAll() {
  var view = getStoriesView(stories);
  document.querySelector('#main').innerHTML = view.toHTML();
  attachFullScreenListeners();
};

function getAylienData(query, callback) {
  getJSON(aylienUrl + query, callback);
}; 

function getUpdateCallback(title) {
  return function(data) {
    stories.getTitle(title).setDesc(data.text);
    displayAll();
  };
};

function getGuardianData(callback) {
  getJSON(guardianUrl, callback);
}; 

function guardianResultToData(result) {
  var data = {
    "description": "Loading...",
    "link": result.webUrl,
    "date": result.webPublicationDate,
    "image": result.fields.thumbnail,
    "title": result.webTitle,
  };
  getAylienData(result.webUrl, getUpdateCallback(result.webTitle));
  return data;
};

function jsonToStories(data) {
  var storyData = data.response.results;
  for (var index = 0; index < storyData.length; index++) {
    var result = guardianResultToData(storyData[index]);
    stories.add(result);
  }
  return stories;
}

function displayAllJSON(data) {
  var stories = jsonToStories(data);
  displayAll();
};

getGuardianData(displayAllJSON);
