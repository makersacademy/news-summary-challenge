/// Sample function to make sure testing is working,
/// feel free to ignore.
function exampleOutputTester(json) {
  return json.response.status;
}

/// Grabs news from guardian api when passed as argument.
function getNews(url){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  this.data = null;

  xhr.onload = function(){
    if(this.status == 200){
      var news = new NewsParser(JSON.parse(this.responseText));

      console.log("loaded news");
      listHeadlines(news);
    }
  };

  xhr.send();
}

function NewsParser(json) {

  this.allStories = json.response.results;

  this.headline = function(index) {
    return json.response.results[index].webTitle;
  };

  this.url = function(index) {
    return json.response.results[index].webUrl;
  };

  this.category = function(index) {
    return json.response.results[index].sectionName;
  };

}

function listHeadlines(news) {
  var storyList = document.getElementById("storyList");
  appendHeadlines(storyList, news);
}

function appendHeadlines(storyList, news) {
    for (var i = 0; i < news.allStories.length; i++) {
    var currentStoryCategory = news.category(i);
    var storyListItem = document.createElement("li");
    var storyLink = document.createElement("a");
    storyLink.href = news.url(i);
    storyList.appendChild(storyListItem);
    storyList.appendChild(storyLink);
    storyLink.innerHTML = "link";
    storyListItem.innerHTML = news.headline(i) + " - " +
    currentStoryCategory;

  }
}
