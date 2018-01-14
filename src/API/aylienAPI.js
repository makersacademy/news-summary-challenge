function readStory(storyId, length) {
  var story = List.findStoryById(storyId);
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
