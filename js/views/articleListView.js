'use strict';

(function (exports) {
  exports.ArticleListView = function (articleList) {
    articles = articleList.allArticles();

    function allArticlesHTML() {
      html = '<div><ul>';
      articles.map((article) => {
        html += '<li><div><p id="headlines">' + headlineHTML(article) + '</p>'
        + '<img src="' + imagesHTML(article) + '"><br>'
        + '<p><a href="' + urlHTML(article) + '">Click To Read</a></p></div></li>'
      });
      return html + "</ul></div>";
    }

    function singleArticleHTML(imageNode) {
      articles.map((article) => {
        if (imageNode.outerHTML.search(article.featureImage()) === 10) {
         singleArticle = article
        };
      })
      html = '<div><p id="headlines">' + headlineHTML(singleArticle) + '</p>'
      + '<img src="' + imagesHTML(singleArticle) + '"><br>'
      + '<p id="summary"> ' + summaryHTML(singleArticle) + '</p><br>'
      + '<p><a href="' + urlHTML(singleArticle) + '">Click To Read Full Story</a></p></div>';
      return html
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
      singleArticleHTML: singleArticleHTML
    }

    var articles, html, article, singleArticle
  }
})(this);