var doubleArticleData = {
apiUrl : "https://content.guardianapis.com/tv/miranda",
fields : {body  : `<p>This year felt different. <img src="https://media.jpg" alt="Steve" width="1000" height="710" class="gu-image" /></p>`},
webTitle : "Miranda Sawyer’s best radio of 2017",
webUrl : "https://www.theguardian.com/tv/miranda",
}
// var doubleArticleDataList = [doubleArticleData, doubleArticleData];
function DoubleArticle(data) { }

var articleList = new ArticleList(DoubleArticle);

function testList(){
  var description = "ArticleListModel return a list";
  var assertion = articleList.list() instanceof Array;
  assert.isTrue(description, assertion);
}

testList()

function testAddArticle(){
  articleList.add(doubleArticleData);
  var description = "ArticleListModel create and save an article"
  var assertion = articleList.list()[0] instanceof DoubleArticle;
  assert.isTrue(description, assertion);
}

testAddArticle();
