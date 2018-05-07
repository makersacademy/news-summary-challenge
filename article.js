(function (exports) {
  function Article(jsonString){
    this.headline = jsonString.webTitle;
    this.publicationDate = jsonString.webPublicationDate.split("T")[0];
    this.url = jsonString.webUrl;
    this.thumbnail = jsonString.fields.thumbnail;


  }

  exports.Article = Article;

})(this);
