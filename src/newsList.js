'use strict';

(function(exports) {
  
  function NewsList() { this._newsStories = [] }
  // headline, thumbnail, date, url, content, image 
    NewsList.prototype.addToList = function(headline, thumbnail, date, url, content, image) {
      var newsStory = new NewsStory(headline, thumbnail, date, url, content, image);
      var newsStoryId = this._newsStories.length + 1;
      newsStory._id = newsStoryId;
      this._newsStories.push(newsStory);
    }

    NewsList.prototype.newsStories = function() {
      return this._newsStories;
    }
     
   exports.NewsList = NewsList;
})(this);
