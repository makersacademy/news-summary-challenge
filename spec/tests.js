function testNewsController() {
  var element = document.getElementById('news');
  var newsController = new NewsController(element);
  newsController.getHTML()
  assert.isTrue("News Controller can change HTML", element.innerHTML === "hello!")
};

testNewsController()
