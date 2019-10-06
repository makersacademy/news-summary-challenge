(function(exports) {
    function Article(headline, url) {
        this.headline = headline;
        this.url = url;
    }

    Article.prototype.getHeadline = function() {
        return this.headline;
    };

    Article.prototype.getUrl = function() {
        return this.url;
    };
  
    exports.Article = Article;
  })(this);
  