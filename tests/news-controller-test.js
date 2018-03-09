(function(exports) {
  function testNewsController() {
    function DoubleNewspaper() {};

    DoubleNewspaper.prototype = {
      returnHeadlineFromList: function() {
        return "Headline"
      }
    };

    function DoubleNewspaperView(newspaper) {};

    DoubleNewspaperView.prototype = {
      returnHtml: function() {
        return "<ul><li>Headline</li></ul>"
      }
    };

    var doubleNewspaper = new DoubleNewspaper();
    var doubleNewspaperView = new DoubleNewspaperView(doubleNewspaper);
    var controller = new NewsController(doubleNewspaper, doubleNewspaperView);

    controller.addHeadlinesToPage("headlines");
    assert.isTrue(document.getElementById("headlines").innerHTML === "<ul><li>Headline</li></ul>", "Headline rendered on page");

  };

  testNewsController()
})(this);
