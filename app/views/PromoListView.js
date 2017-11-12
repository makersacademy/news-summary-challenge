(function(exports) {

  exports.PromoListView = function(promoListModel) {
    var _articles = promoListModel.articles();

    var toHtml = function() {
      var html = "<div><ul>";
      _articles.forEach(function(article) {
        html += "<li><div><h3><a href='#articles/" + article.id() + "'>" + article.headline + "</a></h3>"
        html += "<p><a href='" + article.url + "'>Full story</a></p></div></li>"
      });
      return html + "</ul></div>";
    }

    return {
      toHtml: toHtml
    };
  };

})(this);
