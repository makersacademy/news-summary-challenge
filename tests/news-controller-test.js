(function(exports) {
  function testNewsControllerDisplayHeadlines() {
    
    let newspaperDouble;
    let NewspaperViewDouble = function() {};

    NewspaperViewDouble.prototype.html = function() {
      return '<ul><li><div><a href="http://test.com">A Headline</a></div></li></ul>';
    }

    let newsController = new NewsController(newspaperDouble, NewspaperViewDouble);
    newsController.displayHtml()

    assert.isTrue(
      document.getElementById("articles").innerHTML === 
      '<ul><li><div><a href="http://test.com">A Headline</a></div></li></ul>',
      "Newscontroller displays list of headlines"
      );
  }

  testNewsControllerDisplayHeadlines();
})(this);
