function testNewsControllerHTML() {
  var element = {innerHTML: "hello"}
  var newsController = new NewsController(element);
  newsController.headline =  function() {
    return "<ul><li><div>News healine 1</div></li></ul>"
  }()
  newsController.inputHTMLtoDOM()
  assert.isTrue("News Controller HTML", element.innerHTML === "<ul><li><div>News healine 1</div></li></ul>")
};

testNewsControllerHTML()
