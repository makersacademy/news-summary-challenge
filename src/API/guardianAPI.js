function loadStories() {
  var request = new XMLHttpRequest();
  request.open('GET', encodeURI('https://content.guardianapis.com/search?api-key=test'));
  request.onreadystatechange = function(response) {
    if (request.readyState === 4) {
      var json = JSON.parse(request.response);
      var array = json.response.results;
      for (var i = 0; i < array.length; i++) {
        storyList.addStory(array[i].webTitle, array[i].webUrl);
      }
    list.innerHTML = displayHeadlines(storyList);
    }
  };
  request.send();
}
