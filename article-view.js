(function(exports){
  function ArticleView() {
    this.list = new ArticleList()
  }
  exports.ArticleView = ArticleView
  })(this);

ArticleView.prototype.render = function() {
  var array = []
  for (var i = 0; i < this.list.list.length; i++) {
      array.push("<div id='" + i + "'>" + this.list.list[i].renderTitle() + "<br>" + "</div>" + "<br>")
  }
  return array.join("")
}
