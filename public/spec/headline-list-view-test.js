describe(".headlineListView", () => {

  var headlineListViewTest = new HeadlineListView();

  it("It should return an array of headlines", () => {
    assert.isTrue(Array.isArray(headlineListViewTest.returnList()));
  });

  it("It should add a new headline", () => {
    headlineListViewTest.add("Sweetness", "www.sweetness.com");
    assert.isEqual(headlineListViewTest.returnList()[0].title, "Sweetness");
  });

  it("It should return a string of HTML", () => {
    html = `<ul><li><a href="www.sweetness.com">Sweetness</a></li></ul>`
    assert.isEqual(headlineListViewTest.getHTML(), html);
  });

});