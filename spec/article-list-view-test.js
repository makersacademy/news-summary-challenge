
var articleListView = new ArticleListView

function testShowList() {
  articleListView.addArticleFromView("hi","hello","yes", "sure", "yeah")
  var describe = 'should show article id and headline in HTML'
  assert.isTrue(describe, articleListView.showList() ===
    '<ul><li><div><a href="#articles/1">hello</a></div></li></ul>');
};


testShowList()
