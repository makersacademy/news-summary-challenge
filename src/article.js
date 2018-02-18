(function(exports) {

  function Article(headline, body, url){
    this.Headline = headline
    this.Body = body
    this.url = url

    Article.prototype.getHeadline = function(){
      return this.Headline
    };

    Article.prototype.getBody = function(){
      return this.Body
    };

    Article.prototype.getUrl = function(){
      return this.url
    }
  };

  exports.Article = Article;
})(this)
