function ArticleListView(articleList) {
  this.articleList = articleList
}

ArticleListView.prototype = (function () {
  function toHTML() {
    var articleTitles = this.articleList.show().map(article => `<li><div>${article.showTitle()}</div></li>`)
    return `<ul>${articleTitles.join('')}</ul>`
  }

  return {
    toHTML: toHTML
  }
})()