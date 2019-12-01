(function(exports) {
    function Article(headline, url, id) {
        this.headline = headline;
        this.url = url;
        this.id = id;
        this.summary = null;
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

    Article.prototype.addSummary = function(text) {
        this.summary = text;
    };

    Article.prototype.getSummary = function() {
        return this.summary;
    };
  
    exports.Article = Article;
})(this);
  