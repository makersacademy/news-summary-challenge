(function(exports) {
  const NewspaperView = function(newspaper) {
    this.newspaper = newspaper;
  }
  NewspaperView.prototype = (function() {

    function headlineHtml() {
      return "<ul><li><div>" +
        (this.newspaper.viewArticles()[0].showHeadline()) +
        "</div></li></ul>";
    }

    return {
      headlineHtml
    }
  })();

  exports.NewspaperView = NewspaperView;
})(this);