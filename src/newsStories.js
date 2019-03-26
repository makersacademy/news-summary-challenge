(function(exports) {
  function NewsStories() {
    this._newsStoriesArray = []
  }

  NewsStories.prototype = {
    getStories: function(callback) {
      var self = this
      var request = new XMLHttpRequest()
      request.open('GET', 'http://content.guardianapis.com/politics?show-fields=body&api-key=5189e733-4d22-4f71-972d-99e8f74e1929', true)
      request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        console.log(data)
        var id = -1
        if (request.status >= 200 && request.status < 400) {
          data.response.results.forEach(newsStory => {
            console.log(newsStory.webTitle)
            id += 1
            self._newsStoriesArray.push({id: id, title: newsStory.webTitle, body: newsStory.fields.body})
          })
        } else {
          console.log('error')
        }
        callback()
      };
      request.send()
    }
  };

  exports.NewsStories = NewsStories

})(this);
