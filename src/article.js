function Article(headline, body){
  this.Headline = headline
  this.Body = body

  Article.prototype.getHeadline = function(){
    return this.Headline
  }

  Article.prototype.getBody = function(){
    return this.Body
  }
}
