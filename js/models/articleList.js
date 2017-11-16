'use strict';

(function (exports) {
  exports.ArticleList = function () {

    articles = [];

    function allArticles() {
      return articles;
    };

    function addArticle(headline, url, image, body) {
      summary = summarize(body)
      article = new Article(headline, url, image, summary)
      articles.push(article);
    };

    function summarize(body) {
      firstParagraphRegExp = /<p>(.+?)<\/p>/;
      summary = body.match(firstParagraphRegExp);
      try {
        return summary.shift();
      } catch (error) {
        return error.message = '<p>Sorry, there is no summary available for this article</p>'
      }
    };

    return {
      allArticles: allArticles,
      addArticle: addArticle
    }

    var articles, article, firstParagraphRegExp, summary
  }
})(this);