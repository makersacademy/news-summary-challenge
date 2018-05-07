(function (exports) {
  function Article(jsonString){
    this.headline = jsonString.response.content.webTitle;
    this.publicationDate = jsonString.response.content.webPublicationDate.split("T")[0];
    this.url = jsonString.response.content.webUrl;


  }

  exports.Article = Article;

})(this);
