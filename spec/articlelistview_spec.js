(function(exports) {
  function testhtmlStringify() {
    var articlelist = new ArticleList;
    articlelist.save("headline", "content", "url", "date");
    var articlelistview = new ArticleListView(articlelist);
    assert.isTrue(articlelistview.htmlStringify() === '<ul><li><div><a href="http://localhost:8080#articles/1">headline</a></div></li></ul>');
  };

  testhtmlStringify();
})(this);
