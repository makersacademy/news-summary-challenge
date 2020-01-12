function ArticleController(articleListView) {
  this.articleListView = articleListView
}

ArticleController.prototype = (function () {
  function updateHTML() {
    var HTML = this.articleListView.toHTML()
    document.getElementById('main').innerHTML = HTML
  }

  return {
    updateHTML: updateHTML
  }
})()