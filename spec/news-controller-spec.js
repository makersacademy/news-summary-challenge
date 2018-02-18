(function(exports) {

  (function testNewsController() {
    var todaysNewsDummy = {articles: function() { return "test"} }
    var newsController = new NewsController(todaysNewsDummy);
    assert.isA(
      newsController,
      NewsController
    );
  })();

  (function testNewsControllerStorestodaysNews() {
    var todaysNewsDummy = {articles: function() { return "test"} }
    var newsController = new NewsController(todaysNewsDummy);
    assert.isTrue(
      newsController.articles.includes("test"),
      "test that newsController takes todayNews and stores it"
    );
  })();

  (function testNewsControllerCanAddTextToIndex() {
    var todaysNewsDummy = {articles: function() { return "test"} }
    var printerDummy = {list: function() { return "test"} }
    var newsController = new NewsController(todaysNewsDummy, printerDummy);
    var dummyContent = { innerHTML: null};
    newsController.run(dummyContent);

    assert.isTrue(
       dummyContent.innerHTML === "test",
      "test that newsController can set content of innerHTML elements"
    );
  })();

})();
