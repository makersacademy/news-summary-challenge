function Article(title) {
  this.title = title
}

Article.prototype = (function () {
  function showTitle() {
    return this.title
  }

  return {
    showTitle: showTitle
  }
})()
