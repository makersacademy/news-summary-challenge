/// Sample function to make sure testing is working,
/// feel free to ignore.
function exampleOutputTester(json) {
  return json.response.status;
}

/// Grabs news from guardian api when passed as argument.
function NewsGrabber(json) {

  this.allStories = json.response.results;

  this.headline = function(index) {
    return json.response.results[index].webTitle;
  };
  this.url = function(index) {
    return json.response.results[index].webUrl;
  };
}

function listHeadlines(news) {
  var storyList = document.getElementById("storyList");
  appendHeadlines(storyList);
}

function appendHeadlines(storyList) {
    for (var i = 0; i < news.allStories.length; i++) {
    var currentStory = news.allStories[i];
    var storyListItem = document.createElement("li");
    // storyLink.innerHTML = currentStory.webTitle;
    storyList.appendChild(storyListItem);
    storyListItem.innerHTML = currentStory.webTitle;
  }
}

var news;
news = new NewsGrabber(exampleOutput);
