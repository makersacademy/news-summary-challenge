'use strict';

(function (exports) {
  exports.NewsliController = function (ArticleList, ArticleListView) {
    articleList = new ArticleList;
    articleListView = new ArticleListView(articleList);

    makersDomain = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=';
    url = 'http://content.guardianapis.com/search?';

    function loadContent() {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          articles = JSON.parse(this.responseText).response.results;
          updateArticleList(articles)
        };
      };
      xhttp.open("GET", makersDomain + url, true);
      xhttp.send()
    }

    function updateArticleList(articles) {
      articles.map((article) => {
        articleList.addArticle(article.webTitle, article.webUrl)
      })
      _showCurrentArticleList()
    }

    function _showCurrentArticleList() {
      html = articleListView.allHeadlinesHTML();
      document.getElementById("app").innerHTML = html
    }

    return {
      loadContent: loadContent
    }

    var articleList, articleListView, makersDomain, url, xhttp, articles, html;
  }
})(this);