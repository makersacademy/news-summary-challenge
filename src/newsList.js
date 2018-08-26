(function(exports) {
  
  function NewsList() { this._newsStories = [] }
   
    NewsList.prototype.addToList = function(headline, date, url, content) {
      var newsStory = new NewsStory(headline, date, url, content);
      var newsStoryId = this._newsStories.length + 1;
      newsStory._id = newsStoryId;
      this._newsStories.push(newsStory);
    }

    NewsList.prototype.newsStories = function() {
      return this._newsStories;
    }
     
   exports.NewsList = NewsList;
})(this);

// headline, thumbnail, date, url, content, image
