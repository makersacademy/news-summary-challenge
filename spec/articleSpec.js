(function(exports) {
  function testArticleReturnsText(){
    var article = new Article("text", "link", "pic")

    if (article.getText() !== "text") {
      throw new Error("Incorrect text match")
    };
  };
  testArticleReturnsText()
})(this);
