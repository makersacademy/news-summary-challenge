(function(exports){

  function NewspaperDouble() {
    this.content = [];
    this.articles = function () {
      return this.content;
    };
  };
  newspaper = new NewspaperDouble();

  function renderEmptyNewspaper() {
    let controller = new NewspaperController(newspaper);
    controller.renderHTML();
    assert.isTrue(document.getElementById('app').innerHTML === "<ul><li><div></div></li></ul>" )
  }
  renderEmptyNewspaper();

  function singleArticleViewTest() {
    var paper = new Newspaper();
    paper.addArticle('Testing Testing');
    var controller = new NewspaperController(paper);
    controller.listenForHashChange(controller.view());
    window.location.hash = '#articles/0';
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    assert.isTrue(document.getElementById('app').innerHTML === "<div>Testing Testing</div>");
  }
  singleArticleViewTest(); 
})(this);
