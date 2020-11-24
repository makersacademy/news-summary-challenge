(function(exports){
  function ArticleDouble(text, id) {
    this.text = text;
    this.id = id;
    this.articleID = function() {
      return this.id
    };
    this.content = function() {
      return this.text
    };
  } 
  function NewspaperDouble() {
    this.content = [];
    this.articles = function () {
      return this.content;
    };
    this.addArticle = function (text) {
      article = new ArticleDouble(text, 0);
      this.articles().push(article);
    };
  };
  newspaper = new NewspaperDouble();

  function renderEmptyNewspaper() {
    let controller = new NewspaperController(newspaper);
    controller.renderHTML();
    assert.isTrue(document.getElementById('app').innerHTML === "<ul><li><div></div></li></ul>" )
  }
  renderEmptyNewspaper();
})(this);
