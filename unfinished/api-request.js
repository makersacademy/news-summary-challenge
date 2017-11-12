var SearchStoriesResponse;
var SummariesResponse;

function NewsListModel () {
  this._newsList = createNewsStories();
}

function createNewsStories () {
  var newsList = [];
  for (var i = 0; i < 3; i ++) {
    newsList.push(new NewsStoryModel(getHeadline(i), getSummary(i), getImgUrl(i)));
  }
  return newslist;
}

function getHeadline (index) {
  return _getHeadlineWrapper(index, function(stories){
    return stories.results[index].webTitle;
  });
}

function _getHeadlineWrapper (index, callback) {
  var stories = retrieveStories(function(stories){
    return stories;
  });
  return callback(stories);
}


function getSummary (index) {
  var storySummary;
  var storySummaryRequest = new XMLHttpRequest();
  storySummaryRequest.open('GET', storySummary(getStoryID(index)), true);
  storySummaryRequest.send();
  storySummaryRequest.addEventListener("readystatechange", processSummaryRequest, false);

  function processSummaryRequest (e) {
    if (storySummaryRequest.readyState == 4 && storySummaryRequest.status == 200) {
      storySummary = JSON.parse(storySummaryRequest.responseText).response.text;
    }
  }
  return storySummary;
}

function getImgUrl (index) {
  var imgUrl;
  var imgURLRequest = new XMLHttpRequest();
  storyOneRequest.open('GET', singleStory(index), true);
  storyOneRequest.send();
  storyOneRequest.addEventListener("readystatechange", processImgUrlRequest, false);

  function processImgUrlRequest (e) {
    if (storyOneRequest.readyState == 4 && storyOneRequest.status == 200) {
      var body = JSON.parse(storyOneRequest.responseText).response.response.content.fields.body;
      imgUrl = body.match(/<img src=(.*?)\s/)[1] || "https://cdn.browshot.com/static/images/not-found.png";
    }
  }
  return imgUrl;
}

function getStoryID (index) {
  return SearchStoriesResponse.results[index].id;
}

function retrieveStories (callback) {
  var SearchStoriesResponse;
  var searchStoriesRequest = new XMLHttpRequest();
  searchStoriesRequest.open('GET', searchStoriesApiUrl(), true);
  searchStoriesRequest.send();
  searchStoriesRequest.addEventListener("readystatechange", processSearchStoriesRequest, false);
  function processSearchStoriesRequest (e) {
      if (searchStoriesRequest.readyState == 4 && searchStoriesRequest.status == 200) {
        SearchStoriesResponse = JSON.parse(searchStoriesRequest.responseText).response;
      }
  }
  return callback(SearchStoriesResponse);
}

function todaysDate () {
  return (new Date().toISOString().slice(0, 10));
}

function searchStoriesApiUrl () {
  return "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=" + todaysDate() + "&show-elements=image&show-fields=body&page=1&page-size=3&q=uk";
}

function singleStory (storyID) {
  return "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/" + storyID + "?show-fields=body";
}

function storySummary (storyID) {
  return "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://theguardian.com/" + storyID;
}
