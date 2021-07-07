(function(exports) {
  function SinglePieceViewer(article = new Article()) {
    this.article = article
  }

  exports.SinglePieceViewer = SinglePieceViewer
})(this);

SinglePieceViewer.prototype.viewSinglePiece = function() {
  return "<div class='article'>" + this.article.body + "</div>"
}