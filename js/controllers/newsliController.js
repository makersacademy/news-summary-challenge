'use strict';

(function (exports) {
  exports.NewsliController = function (ArticleList, ArticleListView, ArticleView) {
    articleList = new ArticleList;
    articleListView = new ArticleListView(articleList)
    articleView = new ArticleView;

    articlesContainer = document.getElementById("articles-view");
    articleContainer = document.getElementById("single-article-view");
    imageNodes = document.getElementsByTagName("IMG")

    makersDomain = 'http://news-summary-api.herokuapp.com/';
    guardianAPIRequest = 'guardian?apiRequestUrl='
    url = 'http://content.guardianapis.com/search?'
    allFields = 'show-fields=all';

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

    function showSingleArticle() {
      imageArray = [].slice.call(imageNodes)
      imageArray.forEach((imageNode) => {
        imageNode.addEventListener('click', toggleArticleView.bind(imageNode));
      });
    };

    function toggleArticleView() {
      hideArticlesContainer();
      showArticle(this);
      returnToArticlesEventListener()
    }

    function updateArticleList(articles) {
      articles.forEach((article) => {
        articleList.addArticle(article.webTitle, article.webUrl, article.fields.thumbnail, article.fields.body)
      })
      showCurrentArticleList()
    }

    function showArticle(link) {
      showSingleArticleContainer()
      articleObject = articleListView.returnSingleArticle(link)
      articleHTML = articleView.articleHTML(articleObject)
      articleHTML += "<button id='back' type='button'>Back<button>"
      articleContainer.innerHTML = articleHTML
    }

    function showCurrentArticleList() {
      html = articleListView.allArticlesHTML();
      articlesContainer.innerHTML = html
    }

    function returnToArticlesEventListener() {
      header = document.getElementById("back")
      header.addEventListener('click', function() {
        hideSingleArticleContainer();
        showArticlesContainer();
      });
    };

    function hideArticlesContainer() {;
      articlesContainer.style.display = 'none';
    }

    function showArticlesContainer() {
      articlesContainer.style.display = 'block';
    }

    function hideSingleArticleContainer() {
      articleContainer.style.display = 'none';
    }

    function showSingleArticleContainer() {
      articleContainer.style.display = 'block';
    }

    return {
      loadContent: loadContent,
      showSingleArticle: showSingleArticle,
    }

    var articleList, articleListView, makersDomain, guardianAPIRequest, url, allFields, xhttp, articles, html, imageNodes, imageArray, articleView,  articlesContainer, articleContainer, header, articleObject,             articleHTML, backButton;
  }
})(this);