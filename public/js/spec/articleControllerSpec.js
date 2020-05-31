(function(){

  let articleController = new ArticleController()
  articleController.articleList.add('This is a headline');

  function testArticleControllerCanBeInstantiated() {
    assert.isTrue(articleController.articleList.list.length === 1)
  }

  function testHTMLChanges() {
    articleController.insertHTML();
    assert.isTrue(articleController.articleListView.returnHTMLstring() === '<ul><li><div>This is a headline</div></li></ul>')
  }

  testArticleControllerCanBeInstantiated();
  testHTMLChanges();
})()
