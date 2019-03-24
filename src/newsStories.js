(function(exports) {
  function NewsStories() {
    this._newsStoriesArray = []
  };

  NewsStories.prototype = {
    getStories: function() {
      var newsStoriesArray = this._newsStoriesArray
      var self = this
      var request = new XMLHttpRequest()
      request.open('GET', 'http://content.guardianapis.com/politics?show-fields=body&api-key=5189e733-4d22-4f71-972d-99e8f74e1929', true)
      request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        console.log(data)
var testArr = []
        var id = -1
        if (request.status >= 200 && request.status < 400) {
          data.response.results.forEach(newsStory => {
            console.log(newsStory.webTitle)
            id += 1
console.log(id)
console.log(newsStory.webTitle)
            newsStoriesArray.push({id: id, title: newsStory.webTitle, body: newsStory.fields.body})
testArr.push({id: id})
          })
console.log(self._newsStoriesArray)
console.log(testArr)
console.log(newsStoriesArray)
        } else {
          console.log('error')
        }
console.log(self._newsStoriesArray)
console.log(newsStoriesArray)
      };
      
console.log(this._newsStoriesArray)
console.log(newsStoriesArray)
      request.send()
console.log(this._newsStoriesArray)
console.log(newsStoriesArray)
this._newsStoriesArray = newsStoriesArray
console.log(this._newsStoriesArray)
    }
  };

  exports.NewsStories = NewsStories

})(this);

(function(exports) {
var news = new NewsStories()
news.getStories()
console.log(news._newsStoriesArray)
})(this);
