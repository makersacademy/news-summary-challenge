function testInitializedHeadlineList() {
  var headlineList = new HeadlineList();

  assert.isTrue(headlineList.articles.length === 0, "Headline List is initialized with an empty array of articles");
};
testInitializedHeadlineList();

function testGetArticles() {
  var headlineList = new HeadlineList();
  headlineList.createArticle("Headline 2", "url", "summary");

  assert.isTrue(headlineList.getArticles() === headlineList.articles, "'getArticles' returns the articles array");
};
testGetArticles();

function testAddArticle() {
  var headlineList = new HeadlineList();
  var article = new Article("Headline 2", "url", "summary");
  headlineList.addArticle(article);

  assert.isTrue(headlineList.articles.length === 1, "'addArticle' pushes the article into the articles array");
};
testAddArticle();

function testCreateArticle() {
  var headlineList = new HeadlineList();
  headlineList.createArticle("Headline 2", "url", "summary");

  assert.isTrue(headlineList.articles.length === 1, "'createArticle' creates and adds an article to the articles array");
};
testCreateArticle();

function testGetArticleById() {
  var headlineList = new HeadlineList();
  var article1 = new Article("Headline 1", "url1", "summary1");
  var article2 = new Article("Headline 2", "url2", "summary2");
  headlineList.addArticle(article1);
  headlineList.addArticle(article2);

  assert.isTrue(headlineList.getArticleById(5) === article2, "article can be retrieved by ID")
}
testGetArticleById()
