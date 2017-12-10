var doubleArticle = {id:function(){return 1}, title:function(){return "title1"}, img:function(){return `<img src="images/image-not-found.jpg">`}, text:function(){return "some text"}, webUrl: function(){return "www.url.com"}}

var singleView = new SingleArticleView(doubleArticle);

function testHtml(){
  var description = "SingleArticleView return the article to html"
  var assertion = singleView.renderHtml() === `<div id="1"><div class="image"><img src="images/image-not-found.jpg"></div><div class="title">title1</div><div class="text">some text</div><div class="url"><a href="www.url.com">Full article</a></div></div>`;
  assert.isTrue(description, assertion);
}

testHtml()
