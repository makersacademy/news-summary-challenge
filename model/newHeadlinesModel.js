(function (exports){

  function NewsHeadlinesModel(fetchGuardianHeadlines = FetchGuardianFrontAPI, headline = NewsHeadlineModel){
    this.headlines = []
    this.fetchGuardianHeadlines = fetchGuardianHeadlines
    this.headline = headline

    this.rawNewsJson = this._fetchHeadlines()
    this._createHeadlines(this.rawNewsJson)
  }

  NewsHeadlinesModel.prototype._fetchHeadlines = function(){
    articlesApiObject = new this.fetchGuardianHeadlines
    json = articlesApiObject._fetchHeadlines();
    console.log(json)
    return json
  }

  NewsHeadlinesModel.prototype._createHeadlines = function(rawJson){
    console.log(rawJson)
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

