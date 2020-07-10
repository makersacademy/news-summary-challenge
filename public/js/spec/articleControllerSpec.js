(function(){

  let articleController = new ArticleController()
  let article = new Article('This is a headline', 'myurl.com')
  let mainURL = window.location.href
  articleController.articleList.add(article);

  function testArticleControllerCanBeInstantiated() {
    assert.isTrue(articleController.articleList.list.length === 1)
  }

  function testHTMLChanges() {
    articleController.insertHTML();
    let app = document.getElementById('app')
    assert.isTrue(app.innerHTML === '<ul><li><a id="0" href="#articles/0"><div>This is a headline</div></a></li></ul>')
  }

  function testDisplaysSingleArticle() {
    articleController.showSingleArticle();
    document.getElementById('0').click();
    assert.isTrue(mainURL !== window.location.href)
  }

  testArticleControllerCanBeInstantiated();
  testHTMLChanges();
  testDisplaysSingleArticle()
})()
