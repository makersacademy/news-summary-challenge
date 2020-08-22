(function(exports) {
  function testNewsControllerDisplayHeadlines() {
    
    let newspaperDouble;
    let NewspaperViewDouble = function() {};

    NewspaperViewDouble.prototype.viewHeadlines = function() {
      return '<ul><li><div><a href="http://test.com">A Headline</a></div></li></ul>';
    }

    let newsController = new NewsController(newspaperDouble, NewspaperViewDouble);
    newsController.displayHeadlines()

    assert.isTrue(
      document.getElementById("headlines").innerHTML === 
      '<ul><li><div><a href="http://test.com">A Headline</a></div></li></ul>',
      "Newscontroller displays list of headlines"
      );
  }

  testNewsControllerDisplayHeadlines();
})(this);