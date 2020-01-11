function ArticleDouble() {}
ArticleDouble.prototype = {
  title: function() {
    return "Title"
  }
}

function ArticleListDouble() {}
ArticleListDouble.prototype = {
  articles: function() {
    return [new ArticleDouble(), new ArticleDouble()]
  }
}
