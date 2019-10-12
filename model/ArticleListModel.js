(function(exports) {
    function ArticleList() {
        this.articles = [];
    }

    ArticleList.prototype.addArticle = function(headline, url) {
        var id = this.articles.length + 1;
        this.articles.push(new Article(headline, url, id));
    };

    ArticleList.prototype.getList = function() {
        return this.articles;
    };

    ArticleList.prototype.getList = function() {
        return this.articles;
    };

    exports.ArticleList = ArticleList;
  })(this);
  