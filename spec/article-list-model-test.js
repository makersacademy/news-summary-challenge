var doubleArticleData = {};

var doubleArticleBody = {};

function DoubleArticle(data,body) {};

var articleList = new ArticleList(DoubleArticle);

function testList(){
  var description = "ArticleListModel return a list";
  var assertion = articleList.list() instanceof Array;
  assert.isTrue(description, assertion);
}

testList()

function testAddArticle(){
  articleList.add(doubleArticleData, doubleArticleBody);
  var description = "ArticleListModel create and save an article"
  var assertion = articleList.list()[0] instanceof DoubleArticle;
  assert.isTrue(description, assertion);
}

testAddArticle();
