(function(exports) {
  function testhtmlStringify() {
    var article = new Article("headline", "content", "url.com", "23 July");
    var articleview = new ArticleView(article);
    assert.isTrue(articleview.htmlStringify() === "<div>content</div>");
  };

  testhtmlStringify();
})(this);
