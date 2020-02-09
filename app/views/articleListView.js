(function (exports) {
  class ListView {
    constructor(articleList) {
      this._articleList = articleList
    }

    display () {
      return this._articleList.list.map(article => {
        return `<div class='article'><div class='title'>${article.title}</div><div class='body'>${article.summary}</div></div>`
      }).join('')
    }
  }

  exports.ListView = ListView
})(this)