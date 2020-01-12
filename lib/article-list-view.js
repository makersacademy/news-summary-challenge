function ArticleListView(articleList) {
  this.articleList = articleList
}

ArticleListView.prototype = (function () {
  function toHTML() {
    var articleTitles = this.articleList.show().map(article => 
    `<li><div><a href='#${article.id}'>${article.showTitle()}</a></div>
    <input type="button" onclick="location.href='${article.url}'" value="Go to full article" /></li>`)
    return `<ul>${articleTitles.join('')}</ul>`
  }

  return {
    toHTML: toHTML
  }
})()