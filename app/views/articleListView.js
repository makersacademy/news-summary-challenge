(function (exports) {
  class ListView {
    constructor(articleList) {
      this._articleList = articleList
    }

    display () {
      return this._articleList.list.map(article => {
        return `<div class="article"><a href="#articles/${article.id}" id="${article.id}"><div class="title">${article.title}</div><div class="summary">${article.summary}</div></a></div><br>`
      }).join('')
    }
  }

  exports.ListView = ListView
})(this)