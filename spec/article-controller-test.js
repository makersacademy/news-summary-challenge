var articleController = new ArticleController

function testAddArticle () {
  noteController.addArticle("id","headline", "summary", "url", "thumbnail")
  var describe = "should add article"
  assert.isTrue(describe, articleController.articleViewlist_.articleList.list().[0]
      === )
}
