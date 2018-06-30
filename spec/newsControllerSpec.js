"use strict";

(function testNewsControllerCanUpdateDOM() {
  var headlineListDouble = {};
  var newsController = new NewsController(headlineListDouble);
  var htmlText = '<ul><li><div><a href="#0">Danny Dyer for Prime Minster</a></div></li></ul>';
  newsController.headlineListView.returnHeadlineHTML = function stubReturnHTML() {
    return htmlText;
  };
  newsController.renderHTML()
  var element = document.getElementById('app').innerHTML;
  assert.isTrue(element === htmlText)
  console.log("Test for: News Controller renders clickable headline HTML on the page PASSED")
})();
