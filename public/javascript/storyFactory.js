function storyFactory(Story) {
  var stories = [];

  var url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=uk';

  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  
  request.onload = function() {
    if ( request.status >= 200 && request.status < 400) {
      var results = JSON.parse(request.responseText).response.results;
      makeStories(results);
    } else {
      console.log('server returned an error');
    }
  };

  function makeStories(results) {
    results.forEach(function(result){
      stories.push(new Story(result));
    });
  }

  request.onerror = function() {
    console.log('connection failed');
  };

  request.send();
}