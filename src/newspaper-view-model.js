(function(exports) {

  const NewspaperView = function(newspaper) {
    this.newspaper = newspaper;
  };
  NewspaperView.prototype = (function() {

    function headlineHtml() {
      let headlines = this.newspaper.viewArticles().map(function(article) {
        return article.showHeadline()
      });
      return "<ul><li><div>" + headlines.join("</div></li><li><div>") + "</div></li></ul>";
    }

    return {
      headlineHtml
    }
  })();

  exports.NewspaperView = NewspaperView;
})(this);