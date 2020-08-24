(function(exports) {

  function testNewspaperAdd() {
    
    let articleDouble = {};
    let newspaper = new Newspaper();
    newspaper.add(articleDouble);

    assert.isTrue(
      newspaper.viewArticles().includes(articleDouble),
      "Articles can be added to Newspaper"); 
  }

  testNewspaperAdd();
})(this);
