window.onload = function() {
  controller = new Controller();
  loadStories();
};

function loadStories() {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://content.guardianapis.com/search?section=politics&show-fields=thumbnail&api-key=test');
  request.onreadystatechange = function(response) {
    if (request.readyState === 4) {
      var json = JSON.parse(request.response);
      var array = json.response.results;
      for (var i = 0; i < array.length; i++) {
        var newsObject = {
          webTitle: array[i].webTitle,
          webUrl: array[i].webUrl,
        };
        controller.list.addStory(newsObject);
      }
        controller.listMaker("list")
    }
  };
  request.send();
}

function readStory(id) {

  var story = controller.list.findStoryById(id);
  var readRequest = new XMLHttpRequest();
  readRequest.open('GET', encodeURI('http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + story.url));
  readRequest.onreadystatechange = function(response) {
    if (readRequest.readyState === 4) {
        var summary = JSON.parse(readRequest.response).sentences.join("")
        document.getElementById('summaries').innerHTML = summary;
    }
  };
  readRequest.send();
}
