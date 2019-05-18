(function(exports) {
  function testArticleReturnsText(){
    var article = new Article("text", "link", "pic")

    if (article.getText() !== "text") {
      throw new Error("Incorrect text match")
    };
  };
  testArticleReturnsText()
})(this);

(function(exports) {
  function testArticleReturnsID(){
    var article = new Article("text", "link", "pic")

    if (article.getID() !== 0) {
      throw new Error("Incorrect ID match")
    };
  };
  testArticleReturnsID()
})(this);

(function(exports) {
  function testArticleReturnsLink(){
    var article = new Article("text", "link", "pic")

    if (article.getLink() !== "link") {
      throw new Error("Incorrect URL match")
    };
  };
  testArticleReturnsLink()
})(this);

(function(exports) {
  function testArticleReturnsPicture(){
    var article = new Article("text", "link", "picture")

    if (article.getPic() !== "picture") {
      throw new Error("Incorrect picture match")
    };
  };
  testArticleReturnsPicture()
})(this);
