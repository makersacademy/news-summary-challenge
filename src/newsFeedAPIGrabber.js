(function(context) {
  
  var response = '';

  function NewsFeedAPIGrabber() { 
    
  }
  
  NewsFeedAPIGrabber.prototype.getFeed = function() {

    var request = new XMLHttpRequest();
    var newsAPIURL = 'http://content.guardianapis.com/search?q=facebook&api-key=' + guardianAPIKey;
    request.open('GET', newsAPIURL, true);
    request.onload = function() {
      
      response = request.response;
      return response;
    }

    request.send();

    // return response;
  }

  context.NewsFeedAPIGrabber = NewsFeedAPIGrabber;
})(this);