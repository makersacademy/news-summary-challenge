(function(exports) {
  function articleContent(){
    var article = new Article('Boris being terrible again', 'url');

    assert.isTrue(article.articleTitle() === 'Boris being terrible again');
  };
  articleContent();
})(this);
