describe(".headlineListView", () => {

  var headlineListView = new HeadlineListView();

  describe("It should return an array of headlines", () => {
    assert.isTrue(Array.isArray(headlineListView.returnList()));
  });

  describe("It should add a new headline", () => {
    headlineListView.add("Sweetness");
    assert.isEqual(headlineListView.returnList()[0], "Sweetness");
  });

  // describe("It should return a string of HTML", () => {
  //   headlineListView.getHTML(
  //     assert
  //   )
  // });

});