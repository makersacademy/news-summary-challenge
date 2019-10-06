(function(exports) {
    function ArticleList() {
        this.articles = [];
    }

    ArticleList.prototype.addArticle = function(headline, url) {
        this.articles.push(new Article(headline, url));
    };

    ArticleList.prototype.getList = function() {
        return this.articles;
    };
  
    exports.ArticleList = ArticleList;
  })(this);
  