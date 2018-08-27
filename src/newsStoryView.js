(function(exports) {
  function NewsStoryView(newsStory) {
    this._newsStory = newsStory;
  };

  NewsStoryView.prototype.htmlParser = function() {  
    var str = `<div><h2>` + this._newsStory.headline() + `</h2>` + `<p>` + this._newsStory.content() + `</p>` + `</div>`;
    return str;
  };

  exports.NewsStoryView = NewsStoryView;
})(this)
