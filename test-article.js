function testArticleInstantiation() {
    var article = new Article();
    assert.isTrue(article.body === "a")
    assert.isTrue(article.title === "b")
  }
testArticleInstantiation();

function testRenderTitle() {
    var article = new Article();
    article.title = "The Title!"
    article.body = "The body of the article itself"
    assert.isTrue(article.renderTitle() === "<h3>The Title!</h3>")
  }
testRenderTitle();

function testRenderBody() {
    var article = new Article();
    article.title = "The title!"
    article.body = "The body of the article itself"
    assert.isTrue(article.renderBody() === "<p>The body of the article itself</p>")
  }
testRenderBody();