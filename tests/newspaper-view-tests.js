(function(exports){ 
  function ArticleDouble(text, id) {
    this.text = text;
    this.id = id;
    this.articleID = function() {
      return this.id
    };
    this.articleTitle = function() {
      return this.text
    };
  } 
  article1 = new ArticleDouble('First Article', 0);
  article2 = new ArticleDouble('Second Article', 1);

  function NewspaperDouble() {
    this.content = [];
    this.articles = function () {
      return this.content;
    };
  };
  newspaper = new NewspaperDouble();

  function newspaperViewTestNoItems(){
    let newspaperView = new NewspaperView(newspaper);

    assert.isTrue(newspaperView.returnHTML() === "<ul><li><div></div></li></ul>");   
  };
  newspaperViewTestNoItems();

  function newspaperViewTestOneItem() {
    newspaper.content = [article1];
    let newspaperView = new NewspaperView(newspaper);
    assert.isTrue(newspaperView.returnHTML() === "<ul><li><div><a href='#articles/0'>First Article</a></div></li></ul>");
  };
  newspaperViewTestOneItem();

  function newspaperViewTestMultipleItems() {
    newspaper.content = [article1, article2];
    let newspaperView = new NewspaperView(newspaper);

    assert.isTrue(newspaperView.returnHTML() === "<ul><li><div><a href='#articles/0'>First Article</a></div></li><li><div><a href='#articles/1'>Second Article</a></div></li></ul>");
  };
  newspaperViewTestMultipleItems();
})(this);
  