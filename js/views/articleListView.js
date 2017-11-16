'use strict';

(function (exports) {
  exports.ArticleListView = function (articleList) {
    articles = articleList.allArticles();

    function allArticlesHTML() {
      html = '<div id ="articles">';
      articles.map((article) => {
        html += '<article><p id="headlines">' + headlineHTML(article) + '</p>'
        + '<img src="' + imagesHTML(article) + '"></article>'
      });
      return html + "</div>";
    }

    function returnSingleArticle(imageNode) {
      singleArticle
      articles.forEach((article) => {
        if (imageNode.outerHTML.search(article.featureImage()) === 10) {
          singleArticle = article
        };
      });
      return singleArticle
    };

    function headlineHTML(article) {
      return article.showHeadline()
    }

    function urlHTML(article) {
      return article.showUrlToFullStory()
    }

    function imagesHTML(article) {
      return article.featureImage()
    }

    function summaryHTML(article) {
      return article.showSummary()
    }

    return {
      allArticlesHTML: allArticlesHTML,
      returnSingleArticle: returnSingleArticle
    }

    var articles, html, article, singleArticle
  }
})(this);