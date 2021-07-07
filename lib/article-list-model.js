function ArticleList() {
  this.listOfArticles = []
}

ArticleList.prototype = (function () {
  function createArticle(title, url, image, id) {
    this.listOfArticles.push(new Article(title, url, image, id))
  }

  function show() {
    return this.listOfArticles
  }

  return {
    createArticle: createArticle,
    show: show,
  }
})()
