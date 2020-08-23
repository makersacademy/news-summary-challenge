(function(exports) {
  function NewspaperView(newspaper) {
    this.paper = newspaper;
  };

  NewspaperView.prototype = (function() {
    function newspaper() {
      return this.paper;
    };
    function returnHTML() {
      array = this.newspaper().articles().map(article => "<a href='#articles/" + article.articleID() + "'>" + article.articleTitle() + "</a>");
      return "<ul><li><div>" + array.join("</div></li><li><div>") + "</div></li></ul>";
    };

    return {
      newspaper,
      returnHTML
    };
  })();
  exports.NewspaperView = NewspaperView;
})(this);
