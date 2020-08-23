(function(exports) {
  function ArticleDouble(text) {
    this.text = text;
    this.content = function() {
      return this.text
    };
  } 

  function singleArticleViewHTMLTest() {
    var article = new ArticleDouble("Test Note");
    var singleArticleView = new SingleArticleView(article);

    assert.isTrue(singleArticleView.returnHTML() === "<div>Test Note</div>")
  }
  singleArticleViewHTMLTest();
})(this)
