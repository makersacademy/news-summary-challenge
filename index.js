window.onload = function() {
  controller = new Controller();
  loadStories();
};

function loadStories() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://content.guardianapis.com/search?api-key=test');
  request.onreadystatechange = function(response) {
    if (request.readyState === 4) {
      var json = JSON.parse(request.response);
      var array = json.response.results;

      console.log(array)
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
  var story = List.findStoryById(id);
  var readRequest = new XMLHttpRequest();
  readRequest.open('GET', encodeURI('http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + story.url));
  readRequest.onreadystatechange = function(response) {
    if (readRequest.readyState === 4) {
      // if(length === 0) {
      //   var json = JSON.parse(readRequest.response).sentences;
      //   document.getElementById('summaries').innerHTML = json + "<br><button onclick='readStory(" + storyId + ", 1)'>Read Full Story</button>";
      // } else {
        var text = JSON.parse(readRequest.response).text;
        document.getElementById('summaries').innerHTML = text;

    }
  };
  readRequest.send();
}
