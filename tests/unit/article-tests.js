(function(exports) {

function instantiatesNewArticle() {
  var article = new Article("This is a new article");
  assert.isTrue(article._headline === "This is a new article", "Article");
}; 

function articleReturnsHeadline() {
  var article = new Article("Returning headliner");
  var articleHeadliner = article.returnHeadline();
  assert.isTrue(articleHeadliner === "Returning headliner", "Returning article headline")
};

instantiatesNewArticle();
articleReturnsHeadline();
})(this);