(function(exports) {
    function Article(headline, url, id) {
        this.headline = headline;
        this.url = url;
        this.id = id;
    }

    Article.prototype.getHeadline = function() {
        return this.headline;
    };

    Article.prototype.getUrl = function() {
        return this.url;
    };

    Article.prototype.getId = function() {
        return this.id;
    };
  
    exports.Article = Article;
  })(this);
  