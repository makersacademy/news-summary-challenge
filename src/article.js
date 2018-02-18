  (function(exports) {

  function Article(headline, body, url, thumbnail){
    this.id = ArticleID.prototype.getID();
    this.Headline = headline
    this.Body = body
    this.url = url
    this.thumbnail = thumbnail
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

    Article.prototype.getThumbnail = function(){
      return this.thumbnail
    }
  };

  exports.Article = Article;
})(this)
