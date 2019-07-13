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
    return json
  }

  NewsHeadlinesModel.prototype._createHeadlines = function(rawJson){
    var self = this

    //this section will get tests to work bur relies on data already returned
    var headlines = rawJson.collections.filter(d => d.displayName === "Headlines")
    headlines[0].content.forEach(function(article){
      self.headlines.push(new self.headline(article.thumbnail, article.headline, article.id))
    })

    // this section is continued experimentation with working on the promise. This breaks tests

  //   rawJson.then((data) => {
  //     headlines = data.collections.filter(d => d.displayName === "Headlines")
  //     // console.log(headlines)
  //     headlines[0].content.forEach(function(article){
  //       self.headlines.push(new self.headline(article.thumbnail, article.headline, article.id))
  //     })
  //     console.log(self.headlines)
  // });
  
}

  NewsHeadlinesModel.prototype.allHeadlines = function(){
    console.log(this.headlines)
    return this.headlines;
  }


  exports.NewsHeadlinesModel = NewsHeadlinesModel
})(this)

