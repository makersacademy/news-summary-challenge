(function(exports){
  function NewspaperView(newspaper) {
    this.newspaper = newspaper;
  }

  NewspaperView.prototype.returnHtml = function() {
    string = "";
    for (var i = 0; i < this.newspaper.listOfArticles.length; i++) {
      string += "<li>" + this.newspaper.returnHeadlineFromList(i) + "</li>";
    }
    return "<ul>" + string + "</ul>";
  };
  exports.NewspaperView = NewspaperView;
})(this);
