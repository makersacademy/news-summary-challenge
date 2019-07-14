(function (exports) {

  function NewsController(newsArticle, newsArticleView = NewsArticleView) {
    var newsArticle = newsArticle;
    var newsArticleView = new NewsArticle(newsArticle);

    newsArticle.addNews("test news");
  
    function getHTMLToPage() {
      var app = document.getElementById("app");
      console.log("NewsArticle:", newsArticle);
      console.log("NewsArticleView:", newsArticleView);
      var htmlThing = newsArticleView.convertToHTML();
      app.innerHTML = htmlThing;
      return app;
    }

    return {
      getHTMLToPage: getHTMLToPage
    }
  }

exports.NewsController = NewsController
}) (this);
