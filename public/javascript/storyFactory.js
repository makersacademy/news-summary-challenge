function storyFactory(Story) {
  var stories = [];

  return new Promise(function(resolve, reject) {
    var url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=uk';
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status == 200) {
        var results = JSON.parse(request.responseText).response.results;
        makeStories(results);
        resolve(stories);
      }
      else {
        reject(Error(request.statusText));
      }
    };

    request.onerror = function() {
      reject(Error("Network Error"));
    };

    function makeStories(results) {
      results.forEach(function(result){
        stories.push(new Story(result));
      });
    }

    request.send();
  });
}
