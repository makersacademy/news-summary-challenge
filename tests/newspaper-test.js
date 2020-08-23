(function(exports) {

  function testNewspaperAdd() {
    
    let articleDouble = {};
    let newspaper = new Newspaper();
    newspaper.add(articleDouble);

    assert.isTrue(
      newspaper.viewArticles().includes(articleDouble),
      "Articles can be added to Newspaper"); 
  }

  // function testNewspaperFetchArticles() {
  //   let newspaper = new Newspaper();
  //   newspaper.fetchArticles();
  //   console.log(newspaper.viewArticles());
  //   let newsController = new NewsController(newspaper, NewspaperView);
  //   newsController.displayHtml();
  // }

  testNewspaperAdd();
  // testNewspaperFetchArticles();
})(this);