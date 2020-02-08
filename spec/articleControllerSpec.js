(function (exports) {
  let articleController

  function fetchArticleFromApi () {
    console.log('fetchArticleFromApi')
    articleController = new ArticleController(new ArticleList)
    articleController.fetchArticles('/public/mockAPI.json')
    setTimeout(() => expect(articleController.articleList.list.length).toEqual(1) , 500)
  }

  fetchArticleFromApi()
})(this)