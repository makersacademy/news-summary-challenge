(function(exports) {

  (function testNewsController() {
    var newsController = new NewsController();
    assert.isA(
      newsController,
      NewsController
    );
  })();

  (function testNewsControllerStorestodaysNews() {
    var todaysNews = "test";
    var newsController = new NewsController(todaysNews);
    assert.isTrue(
      newsController.articles.includes("test"),
      "test that newsController takes todayNews and stores it"
    );
  })();

  (function testNewsControllerCanAddTextToIndex() {
    var todaysNews = "test";
    var newsController = new NewsController(todaysNews);
    var dummyContent= { innerHTML: ""};
    newsController.run(dummyContent);
    assert.isTrue(
       dummyContent.innerHTML === "test",
      "test that newsController can set innerHTML articles ID on index html"
    );
  })();

})();
