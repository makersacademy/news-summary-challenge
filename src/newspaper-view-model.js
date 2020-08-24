(function(exports) {

  const NewspaperView = function(newspaper) {
    this.newspaper = newspaper;
  };
  NewspaperView.prototype = (function() {

    function html() {
      let headlines = this.newspaper.viewArticles().map(function(article) {
        return `<a href="${article.showUrl()}">${article.showHeadline()}</a>`
      });
      return "<ul><li><div>" + headlines.join("</div></li><li><div>") + "</div></li></ul>";
    }

    return {
      html
    }
  })();

  exports.NewspaperView = NewspaperView;
})(this);
