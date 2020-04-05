(function(exports) {

function instantiatesArticleListAsArray() {
  var newspaper = new Newspaper();
  assert.isTrue(newspaper._articleList.length === 0, "Article List Array")
};

function addArticlesToList() {
  var newspaper = new Newspaper();
  newspaper.addArticle("Test Article Headline")
  assert.isTrue(newspaper._articleList[0]._headline === "Test Article Headline", "Article headline has been added into array")
};

function checkArticlesList() {
  var newspaper = new Newspaper();
  newspaper.addArticle("Viewing Article Headline")
  var viewArticleList = newspaper.readArticles();
  assert.isTrue(viewArticleList[0]._headline === "Viewing Article Headline", "Checking we can view Articles we added to articlelist." )
};

// function findArticleById() {
//   var newspaper = new Newspaper();
//   newspaper.addArticle("New Article Headline")
//   var article = newspaper._articleList.find(article => article._id === 0)
//   assert.isTrue(article._headline === "New Article", "Checking article headline can be found by Id")
// };

instantiatesArticleListAsArray();
addArticlesToList();
checkArticlesList();
// findArticleById();
})(this);