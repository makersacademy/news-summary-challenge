(function(exports) {

  exports.PromoListView = function(promoListModel) {
    var _articles = promoListModel.articles();

    var toHtml = function() {
      var html = "<div><ul>";
      _articles.forEach(function(article) {
        html += "<li><h3>" + article.headline + "</h3></li>"
      });
      return html + "</ul></div>";
    }

    return {
      toHtml: toHtml
    };
  };

})(this);
