(function(exports) {
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
  article1 = new ArticleDouble('First Article', 0);
  
  function NewspaperDouble() {
    this.content = [article1];
    this.articles = function () {
      return this.content;
    };
  };
  newspaper = new NewspaperDouble();

  function articleDisplayTest() {
    display = new ArticleDisplay(newspaper, 0);
    assert.isTrue(document.getElementById("app").innerHTML === "<div>First Article</div>");
  };
  articleDisplayTest();
})(this);
