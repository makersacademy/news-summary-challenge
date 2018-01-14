(function(exports){
  function NewspaperView(newspaper) {
    this.newspaper = newspaper;
  }

  NewspaperView.prototype.returnHtml = function() {
    string = "";
    this.newspaper.listOfArticles.forEach(function(article) {
      string += "<li><a href='" + article.displayURL() + "'>" + article.displayHeadline() + "</a></li>";
    });
    return "<ul>" + string + "</ul>";
  };
  exports.NewspaperView = NewspaperView;
})(this);
