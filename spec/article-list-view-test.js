var doubleArticle = {id:function(){return 1}, title:function(){return "title1"}, img:function(){return `<img src="image1">`}, summary:function(){return "first<br>double"}}



var doubleArticleList = {list: function(){return [doubleArticle, doubleArticle]}};


var articleListView = new ArticleListView(doubleArticleList);

function testEmptyList(){
  var articleListView = new ArticleListView();
  var description = "ArticleListView return empty string";
  articleListView.convert();
  var assertion = articleListView.toHtml() === "";
  assert.isTrue(description, assertion);
}

testEmptyList();


function testlistOfOne(){
  var doubleArticleList = {list: function(){return [doubleArticle]}};
  var articleListView = new ArticleListView(doubleArticleList);
  var description = "ArticleListView return a list of one article to html";
  articleListView.convert();
  var assertion = articleListView.toHtml() === `<div id="1"><div class="image"><a href="#article/1"><img src="image1"></a></div><div class="title"><a href="#article/1">title1</a></div><div class="summary">first<br>double</div></div>`;
  assert.isTrue(description, assertion);
}
testlistOfOne();

function testlistOfTwo(){
  var articleListView = new ArticleListView(doubleArticleList);
  var description = "ArticleListView return a list of two article to html";
  articleListView.convert();
  var assertion = articleListView.toHtml() === `<div id="1"><div class="image"><a href="#article/1"><img src="image1"></a></div><div class="title"><a href="#article/1">title1</a></div><div class="summary">first<br>double</div></div><div id="1"><div class="image"><a href="#article/1"><img src="image1"></a></div><div class="title"><a href="#article/1">title1</a></div><div class="summary">first<br>double</div></div>`;
  assert.isTrue(description, assertion);
}
testlistOfTwo();
