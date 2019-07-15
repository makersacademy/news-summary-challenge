(function(exports) {
  function NewsArticleList() {
    var _articles = [];
    var _counter = 0;

    function articles() {
      return _articles;
    }

    function addArticle(headline, url, imageUrl) {
      let article = _addID(new NewsArticle(headline, url, imageUrl));
      articles().push(article);
      return article;
    }

    function convertToHTML() {
      if (_noArticles()) {
        return "<ul>Unable to show any stories</ul>";
      } else {
        return "<ul>" + _listInHTML() + "</ul>";
      }      
    }

    // private functions
    function _addID(article) {
      article.id = _counter;
      _counter++;
      return article;
    }

    function _listInHTML() {
      return articles().map(function (article) {
        return `<li id="${article.id}"><a href="#articles/${article.id}"><h3>${article.headline}</h3></a></li>`;
      }).join('');    
    }

    function _noArticles() {
      return articles().length === 0;
    }

    return {
      addArticle: addArticle,
      articles: articles,
      convertToHTML: convertToHTML
    }
  }

  exports.NewsArticleList = NewsArticleList;
}) (this);
