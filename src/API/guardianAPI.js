function loadStories() {
  var request = new XMLHttpRequest();
  request.open('GET', encodeURI('https://content.guardianapis.com/search?api-key=test'));
  request.onreadystatechange = function(response) {
    if (request.readyState === 4) {
      var json = JSON.parse(request.response);
      var array = json.response.results;
      console.log(array)
      for (var i = 0; i < array.length; i++) {
        var newsObject = {
          webTitle: array[i].webTitle,
          webUrl: array[i].webUrl,
          fields: array[i].fields,
        };
        list.addStory(newsObject);
      }
    list.innerHTML = displayHeadlines();
    }
  };
  request.send();
}
