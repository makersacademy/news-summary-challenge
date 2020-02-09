(function(exports){
  function ArticleView() {
    this.list = new ArticleList()
  }
  exports.ArticleView = ArticleView
  })(this);

ArticleView.prototype.render = function() {
  function ahrefBuilder(i) {
    return ('<a href=' + '"#piece/' + i + '">FULL ARTICLE</a>')
  }
  var array = []
  for (var i = 0; i < this.list.list.length; i++) {
      array.push("<div class='n" + i + "'><div style='width: 80%; float:left'>" + this.list.list[i].renderTitle() + ahrefBuilder(i) + "</div><div style='width: 20%; float:right'>" + this.list.list[i].thumbnail + "</div><br style='clear:both;'/></div><br>")
  }               
  return array.join("")
}


function formBuilder(i) {
    '<form action="#piece/' + i + '" id="form" method="POST">' +
     '<input type="submit" value="Submit" id="submission">' +
     '</form>'
}
