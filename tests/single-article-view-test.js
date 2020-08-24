(function(exports) {
  function testSingleArticleViewHTML() {
    let articleDouble = {};
    articleDouble.showHeadline = function() {
      return "A Headline";
    }
    articleDouble.showSummary = function() {
      return "A summary of the article.";
    }
    let singleArticleView = new SingleArticleView(articleDouble);

    assert.isTrue(singleArticleView.html() === "<div>A Headline<br>A summary of the article.</div>");
  }
  
  testSingleArticleViewHTML();
})(this);