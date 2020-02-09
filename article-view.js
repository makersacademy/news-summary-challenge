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
      array.push("<div class='n" + i + "'>" + this.list.list[i].renderTitle() + "<br>" + ahrefBuilder(i) + "</div>" + "<br>")
  }
  return array.join("")
}

function formBuilder(i) {
    '<form action="#piece/' + i + '" id="form" method="POST">' +
     '<input type="submit" value="Submit" id="submission">' +
     '</form>'
}
