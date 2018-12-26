(function(exports) {

  function NewsArticleListView() {}

  NewsArticleListView.prototype = {
    render: function(articles) {
      return [
        Heading(),
          "<div class='container card-columns text-center'>",
            articles.map(function(article) {
              return [
                "<div class='card mb-2' style='max-width: 30rem;'>",
                  "<img class='card-img-top' src=" + article.thumbnail() + ">",
                  "<div class='card-body'>",
                  "<a class='btn btn-primary' href='#article/" +    article.articleId + "'>" + article.headline() + "</a>",
                  "</div>",
                "</div>"
                ].join("")
              }).join(""),
          "</div>"
      ].join("")
    }
  }

  exports.NewsArticleListView = NewsArticleListView;
})(this);
