'use strict';

(function (exports) {
  exports.NewsliController = function (ArticleList, ArticleListView) {
    articleList = new ArticleList;
    articleListView = new ArticleListView(articleList);

    makersDomain = 'http://news-summary-api.herokuapp.com/';
    guardianAPIRequest = 'guardian?apiRequestUrl='
    url = 'http://content.guardianapis.com/search?'
    allFields = 'show-fields=all';

    // function loadContent() {
    //   xhttp = new XMLHttpRequest();
    //   xhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //       articles = JSON.parse(this.responseText).response.results;
    //       updateArticleList(articles)
    //     };
    //   };
    //   xhttp.open("GET", makersDomain + guardianAPIRequest + url + allFields, true);
    //   xhttp.send()
    // }

    //Using whilst building app to avoid maxing out API Requests
    function loadContent() {
      articles = articlesJSON.response.results
      updateArticleList(articles)
    }

    function updateArticleList(articles) {
      articles.map((article) => {
        console.log(article.fields.body)
        articleList.addArticle(article.webTitle, article.webUrl, article.fields.thumbnail, article.fields.body)
      })
      showCurrentArticleList()
    }

    function showCurrentArticleList() {
      html = articleListView.allArticlesHTML();
      document.getElementById("app").innerHTML = html
    }

    return {
      loadContent: loadContent
    }

    var articleList, articleListView, makersDomain, guardianAPIRequest, url, allFields, xhttp, articles, html;
  }
})(this);