(function (exports){

  function NewsHeadlinesModel(headlineJSON, headline = NewsHeadlineModel){
    this.headlines = []
    this.headline = headline
    this._createHeadlines(headlineJSON)
  }

  NewsHeadlinesModel.prototype._createHeadlines = function(rawJson){
    var self = this;
    var headlines = rawJson.collections.filter(d => d.displayName === "Headlines")
    headlines[0].content.forEach(function(article){
      self.headlines.push(new self.headline(article.thumbnail, article.headline, article.id))
    });
  }

  NewsHeadlinesModel.prototype.allHeadlines = function(){
    return this.headlines;
  }

  exports.NewsHeadlinesModel = NewsHeadlinesModel
})(this)

