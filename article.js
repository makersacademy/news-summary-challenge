(function (exports) {
  function Article(jsonString){
    this.headline = jsonString.response.content.webTitle;

  }

  exports.Article = Article;

})(this);
