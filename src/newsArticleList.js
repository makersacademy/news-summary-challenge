(function(exports) {
  function NewsArticleList() {
    const _articles = [];
    let _counter = 0;

    function articles() {
      return _articles;
    }

    function addArticle(headline, url, imageUrl) {
      const article = _addID(new NewsArticle(headline, url, imageUrl));
      articles().push(article);
      return article;
    }

    function convertToHTML() {
      if (_noArticles()) {
        return '<ul>Unable to show any stories</ul>';
      }

      return `<ul>${_listInHTML()}</ul>`;
    }

    function fetchHeadlines() {
      let url = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${newsApiKey}`;
      fetch(url)
        .then(data => data.json())
        .then(res => {
          res.articles.map(article => {
            const headline = article.title;
            const url = article.url;
            const imageUrl = article.urlToImage;

            addArticle(headline, url, imageUrl);
          });
        });
    }

    // private functions
    function _addID(article) {
      article.id = _counter;
      _counter += 1;
      return article;
    }

    function _listInHTML() {
      return articles()
        .map(function(article) {
          return `<li id="${article.id}"><a href="#articles/${article.id}"><h3>${article.headline}</h3></a></li>`;
        })
        .join('');
    }

    function _noArticles() {
      return articles().length === 0;
    }

    return {
      addArticle,
      articles,
      convertToHTML,
      fetchHeadlines
    };
  }

  exports.NewsArticleList = NewsArticleList;
})(this);
