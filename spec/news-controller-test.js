describe("News controller", function() {
  var dummyElement = document.createElement("div");
  var headlineListMock = {
    getList: function() {
      return ["Fake headline"];
    }
  };
  var headlineViewMock = new HeadlineView(headlineListMock);
  var newsController = new NewsController(headlineListMock, dummyElement, headlineViewMock)
  var htmlString = "<ul><li><div>Fake headline</div></li></ul>"

  it("can be instantiated", function() {
    assert.isTrue(newsController instanceof NewsController);
  });

  it("inserts the HTML string into the app element" , function() {
    newsController.insertHTML();
    assert.isTrue(dummyElement.innerHTML === htmlString);
  })
});
