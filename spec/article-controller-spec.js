describe('ArticleController', () => {
  it('should update the page to show articles', () => {
    var articleList = new ArticleList()
    var articleListView = new ArticleListView(articleList)
    var articleController = new ArticleController(articleListView)
    articleList.createArticle('first article')
    articleList.createArticle('second article')

    var element = document.getElementById('main')
    articleController.updateHTML()

    var article_1 = '<li><div>first article</div></li>'
    var article_2 = '<li><div>second article</div></li>'

    expect(element.innerHTML).toEq(`<ul>${article_1}${article_2}</ul>`)
  })
})
