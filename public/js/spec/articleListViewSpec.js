(function() {

  let article = new Article('This is a headline', 'myurl.com')
  let articleList = new ArticleList()
  articleList.add(article)
  let articleListView = new ArticleListView(articleList)

  function testArticleListViewReturnsHTMLstring(){
    assert.isTrue(articleListView.returnHTMLstring() === '<ul><li><a id="0" href="#articles/0"><div>This is a headline</div></a></li></ul>')
  }

  testArticleListViewReturnsHTMLstring();
})()
