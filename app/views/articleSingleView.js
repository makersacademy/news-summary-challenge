(function (exports) {
  class SingleView {
    display (article) {
      return `<h1 class="article-header">${article.title}</h1><div class="article-body">${article.body}</div>`
    }
  }

  exports.SingleView = SingleView
})(this)