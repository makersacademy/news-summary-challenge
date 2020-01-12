function ArticleList() {
  this.listOfArticles = []
}

ArticleList.prototype = (function () {
  function createArticle(title) {
    this.listOfArticles.push(new Article(title))
  }

  function show() {
    return this.listOfArticles
  }

  return {
    createArticle: createArticle,
    show: show,
  }
})()
