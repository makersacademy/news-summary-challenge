(function(exports){
  function ArticleListView(articleObjectArray) {
    this.articleObjectsToView = articleObjectArray.articleList;
  }

  ArticleListView.prototype.singleHTMLString = function () {
    var htmlString = "";

    for(var i = 0; i < this.articleObjectsToView.length; i++) {

      imageHTML = this.createThumbnailImage(this.articleObjectsToView[i]);
      webTitleHTML = this.createHTMLWebTitle(this.articleObjectsToView[i]);
      divHTML = this.createDiv(imageHTML, webTitleHTML);

      console.log("DIV" + divHTML);

      htmlString += divHTML
    }

    return htmlString
  };

  ArticleListView.prototype.createDiv = function (imageHTML, webTitleHTML) {
    divString = "<div>" + webTitleHTML + imageHTML + "</div>";
    return divString;
  };

  ArticleListView.prototype.createHTMLWebTitle = function (obj) {
    htmlString = "<h3>" + obj.webTitle + "</h3>";
    return htmlString;
  };

  ArticleListView.prototype.createThumbnailImage = function (obj) {
    if (obj.fields === undefined) {
      return ""
    } else {
      htmlString = "<img src=" + obj.fields.thumbnail + ">"
      return htmlString;
    }
  };


exports.ArticleListView = ArticleListView;

})(this);
