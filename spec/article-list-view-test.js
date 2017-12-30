
var articleListView = new ArticleListView

function testRenderHTML() {
  articleListView.articleList().addArticle("hi","hello","yes", "sure", "yeah")
  var describe = 'should show article id and headline in HTML'
  assert.isTrue(describe, articleListView.renderHTML() ===
    '<ul><li><div><a href="#articles/1">hello</a></div></li></ul>');
};


testRenderHTML()
