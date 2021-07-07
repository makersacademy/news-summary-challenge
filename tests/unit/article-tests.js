(function(exports) {
var article = new Article("Headline", 1, "04/04/2020", "www.fakearticle.com", "image.png")

function testHeadlineNameIsCreated() {
  assert.isTrue(article.returnHeadline() === "Headline", "Article Headline displayed")
};

function testArticleIdIsCreated() {
  assert.isTrue(article.returnArticleId() === 1, "Article Unique ID Created")
};

function testArticleDateCreated() {
  assert.isTrue(article.returnArticleDate() === "04/04/2020", "Article Date Created")
};

function testArticleURLCreated() {
  assert.isTrue(article.returnArticleLink() === "www.fakearticle.com", "Article URL Created")
};

function testArticleImageIsCreated() {
  assert.isTrue(article.returnArticleImage() === "image.png", "Article Image is created")
};

testHeadlineNameIsCreated();
testArticleIdIsCreated();
testArticleDateCreated();
testArticleURLCreated();
testArticleImageIsCreated();   
})(this);


// function instantiatesNewArticle() {
//   var article = new Article("This is a new article");
//   assert.isTrue(article._headline === "This is a new article", "Article");
// }; 

// function articleReturnsHeadline() {
//   var article = new Article("Returning headliner");
//   var articleHeadliner = article.returnHeadline();
//   assert.isTrue(articleHeadliner === "Returning headliner", "Returning article headline")
// };

// instantiatesNewArticle();
// articleReturnsHeadline();