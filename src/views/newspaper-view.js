(function(exports) {
  function NewspaperView(newspaper) {
    this.newspaper = newspaper;
  }

  NewspaperView.prototype.returnHtml = function() {
    string = "";
    this.newspaper.listOfArticles.forEach(function(article) {
      var template = [
        "<div class='column is-one-quarter'>",
        "<div class='card is-4by3'>",
        "<div class='card-content'>",
        "<div class='card-image'>",
        "<figure class='image is-4by3'>",
        "<img src='http://placebear.com/360/240' alt='Placeholder image'>",
        "</figure>",
        "</div>",
        "<a href='",
        article.displayURL(),
        "'>",
        article.displayHeadline(),
        "</a>",
        "</div>",
        "</div>",
        "</div>"
      ];
      string += template.join("");
    });
    return string;
  };
  exports.NewspaperView = NewspaperView;
})(this);
