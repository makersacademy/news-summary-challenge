var doubleArticle = `<a href="#article/1"><div id="1"><div class="image"><img src="images/image-not-found.jpg"></div><div class="title">title1</div><div class="summary">first<br>double</div></div></a>`;
var controller = new ArticleController();

function testChangeContent(){
  var description = "ArticleController change page content";
  controller.getElementOf("app")
  controller.changeContent("ola")
  var assertion = controller.getElementOf("app") === "ola";
  assert.isTrue(description, assertion);
}

testChangeContent();

function testShowArticle(){
  var description = "ArticleController change page content to show the Article";
  controller.getElementOf("app")
  controller.changeContent(doubleArticle)
  var assertion = controller.getElementOf("app") === doubleArticle;
  assert.isTrue(description, assertion);
}

testShowArticle()
