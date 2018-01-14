function testInitializedHeadlineList() {
  var headlineList = new HeadlineList();
  assert.isTrue(headlineList.articles.length === 0, "Headline List is initialized with an empty array of articles");
};
testInitializedHeadlineList();

function testAddArticle() {
  var headlineList = new HeadlineList();
  var article = new Article();
  headlineList.addArticle(article);
  assert.isTrue(headlineList.articles.length === 1, "'addArticle' pushes the article into the articles array");
};
testAddArticle();

function testCreateArticle() {
  var headlineList = new HeadlineList();
  headlineList.createArticle("Headline 2");
  assert.isTrue(headlineList.articles[0].getHeadline() === "Headline 2", "'createArticle' creates and adds an article to the articles array");
};
testCreateArticle();
