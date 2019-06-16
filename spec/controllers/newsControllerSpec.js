describe("NewsController", function() {
  it("can display headlines", function() {
    var expectedHTML = "<ul><li><div>Sri Lanka v Australia: Cricket World Cup 2019 – live!</div></li>";
    var fakeHeadlinesView = new FakeHeadlinesView(expectedHTML);
    var newsController = new NewsController(fakeHeadlinesView);

    newsController.displayHeadlines()

    assert(document.getElementById("app").textContent, expectedHTML);
  });
});