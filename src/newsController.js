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

  exports.NewsController = NewsController;
})(this);

// var newsController = new NewsController();
// newsController.sendAPIRequest();
