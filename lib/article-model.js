function Article(title, url, id) {
  this.title = title
  this.url = url
  this.id = id
}

Article.prototype = (function () {
  function showTitle() {
    return this.title
  }

  return {
    showTitle: showTitle
  }
})()
