(function(exports) {
    function ArticleList() {
        this.articles = [];
    }

    ArticleList.prototype.addArticle = function(headline) {
        this.articles.push(new Article(headline));
    };

    ArticleList.prototype.getList = function() {
        return this.articles;
    };
  
    exports.ArticleList = ArticleList;
  })(this);
  