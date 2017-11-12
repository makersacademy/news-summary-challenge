'use strict';

(function (exports) {
  exports.NewsliController = function (ArticleList, ArticleListView) {
    articleList = new ArticleList;
    articleListView = new ArticleListView(articleList);

    makersDomain = 'http://news-summary-api.herokuapp.com/';
    guardianAPIRequest = 'guardian?apiRequestUrl='
    url = 'http://content.guardianapis.com/search?'
    allFields = 'show-fields=all';

    //Comment out during development of app to avoid maxing out API Requests
    function loadContent() {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          articles = JSON.parse(this.responseText).response.results;
          updateArticleList(articles)
          showSingleArticle()
        };
      };
      xhttp.open("GET", makersDomain + guardianAPIRequest + url + allFields, true);
      xhttp.send()
    }

    //Use during development of app to avoid maxing out API Requests
    // function loadContent() {
    //   articles = articlesJSON.response.results
    //   updateArticleList(articles)
    // }

    function showSingleArticle() {
      links = document.getElementsByTagName("IMG")
      linksArray = Array.prototype.slice.call(links)
      linksArray.map((link) => {
        link.addEventListener('click', function () {
          hideArticlesView();
          showArticle(link);
          returnToArticlesView()
        });
      });
    };

    function updateArticleList(articles) {
      articles.map((article) => {
        articleList.addArticle(article.webTitle, article.webUrl, article.fields.thumbnail, article.fields.body)
      })
      showCurrentArticleList()
    }

    function hideArticlesView() {
      articlesView = document.getElementById("articles-view");
      articlesView.style.display = 'none';
    }

    function showArticlesView() {
      articlesView = document.getElementById("articles-view");
      articlesView.style.display = 'block';
    }

    function hideSingleArticleView() {
      singleArticleView = document.getElementById("single-article-view");
      articlesView.style.display = 'none';
    }

    function showArticle(link) {
      articleView = articleListView.singleArticleHTML(link)
      var singleArticleView = document.getElementById("single-article-view")
      singleArticleView.innerHTML = articleView
    }

    function showCurrentArticleList() {
      html = articleListView.allArticlesHTML();
      document.getElementById("articles-view").innerHTML = html
    }

    function returnToArticlesView() {
      header = document.getElementById("header")
      header.addEventListener('click', function() {
        hideSingleArticleView()
        showArticlesView()
      });
    };

    return {
      loadContent: loadContent,
      showSingleArticle: showSingleArticle,
    }

    var articleList, articleListView, makersDomain, guardianAPIRequest, url, allFields, xhttp, articles, html, links, linksArray, articleView, articlesView, singleArticleView, header;
  }
})(this);