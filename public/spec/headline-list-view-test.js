describe(".headlineListView", () => {

  var headlineListView = new HeadlineListView();

  it("It should return an array of headlines", () => {
    assert.isTrue(Array.isArray(headlineListView.returnList()));
  });

  it("It should add a new headline", () => {
    headlineListView.add("Sweetness");
    assert.isEqual(headlineListView.returnList()[0], "Sweetness");
  });

  it("It should return a string of HTML", () => {
    html = "<ul><li>Sweetness</li></ul>"
    assert.isEqual(headlineListView.getHTML(), html);
  });

});