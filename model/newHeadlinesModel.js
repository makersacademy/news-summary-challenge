(function (exports){

  function NewsHeadlinesModel(fetchGuardianHeadlines = FetchGuardianFrontAPI, headline = Headline){
    this.headlines = []
    this.fetchGuardianHeadlines = fetchGuardianHeadlines
    this.headline = headline

    this.rawNewsJson = this._fetchHeadlines()
    this._createHeadlines(this.rawNewsJson)
  }

  NewsHeadlinesModel.prototype._fetchHeadlines = function(){
    return new this.fetchGuardianHeadlines
  }

  NewsHeadlinesModel.prototype._createHeadlines = function(rawJson){
    var self = this
    var headlines = rawJson.collections.filter(d => d.displayName === "Headlines")
    headlines[0].content.forEach(function(article){
      self.headlines.push(new self.headline(article.thumbnail, article.headline, article.id))
    })
  }

  NewsHeadlinesModel.prototype.allHeadlines = function(){
    return this.headlines;
  }


  exports.NewsHeadlinesModel = NewsHeadlinesModel
})(this)

