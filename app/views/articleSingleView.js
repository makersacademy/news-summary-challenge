(function (exports) {
  class SingleView {
    display (article) {
      return `<h1>${article.title}</h1><div>${article.body}</div>`
    }
  }

  exports.SingleView = SingleView
})(this)