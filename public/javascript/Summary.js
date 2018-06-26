function addSummary(stories) {
  var baseUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=';

  stories.forEach(function(story) {
     var reqUrl = baseUrl + story.hotLink;

     var request = new XMLHttpRequest();
     request.open('GET', reqUrl, true);

     request.onload = function() {
      if ( request.status >= 200 && request.status < 400) {
        story.summary = JSON.parse(request.responseText).text;
        render(story);
      } else {
        console.log('server returned an error');
      }
    };

      request.onerror = function() {
        console.log('connection failed');
      };

      request.send();  
     });
}