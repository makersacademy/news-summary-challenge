(function(exports) {
  function NewsController() {};

  NewsController.prototype.sendAPIRequest = function () {
    var guardianApi = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail,body";

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = sendRequest;
    xhr.open('GET', guardianApi);
    xhr.send();

    function sendRequest() {
      var apiResponse;
      try {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            apiResponse = JSON.parse(xhr.response)
            var storyList = new StoryList();
            var storyListView = new StoryListView(storyList)
            storyList.addStory(apiResponse);
            document.getElementById("news").innerHTML = storyListView.returnHTML()
          } else {
            alert('There was a problem with the request.');
          }
        }
      }
      catch( e ) {
        alert('Caught Exception: ' + e.description);
      }
    }
  };

  NewsController.prototype.displayArticle = function (number) {
    for (var i=0; i < this.storyList.storyArray.length; i++) {
      if(this.storyList.storyArray[i] === parseInt(number)) {
        return this.storyList.storyArray[i].story.title;
      }
    }
  };

  exports.NewsController = NewsController;
})(this);

function makeUrlChangeShowSingleStory() {
  window.addEventListener("hashchange", showSingleStory);
};

function showSingleStory() {
  showStory(getStoryFromUrl(window.location));
};

function getStoryFromUrl(location) {
  return location.hash.split("#headline/")[1];
};

function showStory(number) {
  document
    .getElementById("news")
    .innerHTML = newsController.displayArticle(number);
};

var newsController = new NewsController();
newsController.sendAPIRequest();
makeUrlChangeShowSingleStory();
