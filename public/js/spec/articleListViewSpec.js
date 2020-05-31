(function() {

  let articleList = new ArticleList()
  let articleListView = new ArticleListView(articleList)
  articleList.add('This is a headline')

  function testArticleListViewReturnsHTMLstring(){
    assert.isTrue(articleListView.returnHTMLstring() === '<ul><li><div>This is a headline</div></li></ul>')
  }

  testArticleListViewReturnsHTMLstring();
})()
