(function(exports) {
  function articleContent(){
    var article = new Article('Boris being terrible again');

    assert.isTrue(article.content() === 'Boris being terrible again');
  };
  articleContent();
})(this);
