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
  var assertion = articleListView.toHtml() === `<a href="#article/1"><div id="1"><div class="image"><img src="image1"></div><div class="title">title1</div><div class="summary">first<br>double</div></div></a>`;
  assert.isTrue(description, assertion);
}
testlistOfOne();

function testlistOfTwo(){
  var articleListView = new ArticleListView(doubleArticleList);
  var description = "ArticleListView return a list of two article to html";
  articleListView.convert();
  var assertion = articleListView.toHtml() === `<a href="#article/1"><div id="1"><div class="image"><img src="image1"></div><div class="title">title1</div><div class="summary">first<br>double</div></div></a><a href="#article/1"><div id="1"><div class="image"><img src="image1"></div><div class="title">title1</div><div class="summary">first<br>double</div></div></a>`;
  assert.isTrue(description, assertion);
}
testlistOfTwo();
