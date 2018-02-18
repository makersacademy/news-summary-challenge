  (function(exports) {

  function Article(headline, body, url){
    this.id = ArticleID.prototype.getID();
    this.Headline = headline
    this.Body = body
    this.url = url
    ArticleID.prototype.increment();

    Article.prototype.getHeadline = function(){
      return this.Headline
    };

    Article.prototype.getBody = function(){
      return this.Body
    };

    Article.prototype.getUrl = function(){
      return this.url
    };

    Article.prototype.getID = function(){
      return article.id
    }
  };

  exports.Article = Article;
})(this)
