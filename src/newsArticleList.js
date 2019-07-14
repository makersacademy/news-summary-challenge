(function(exports) {
  function NewsArticleList() {
    var _articles = [];
    var counter = 0;

    function articles() {
      return _articles;
    }

    function addArticle(headline, url, imageUrl) {
      let article = _addID(new NewsArticle(headline, url, imageUrl));
      articles().push(article);
      return article;
    }

    function _addID(article) {
      article.id = counter;
      counter++;
      return article;
    }

    return {
      addArticle: addArticle,
      articles: articles
    }
  }

  exports.NewsArticleList = NewsArticleList;
}) (this);
