(function() {

  let articleList = new ArticleList()
  let articleListView = new ArticleListView(articleList)
  articleList.add('This is a headline')

  function testArticleListViewReturnsHTMLstring(){
    assert.isTrue(articleListView.returnHTMLstring() === '<ul><li><a id="0" href="#articles/0"><div>This is a headline</div></a></li></ul>')
  }

  testArticleListViewReturnsHTMLstring();
})()
