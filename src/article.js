function Article(headline){
  this.Headline = headline

  Article.prototype.getHeadline = function(){
    return this.Headline
  }
}
