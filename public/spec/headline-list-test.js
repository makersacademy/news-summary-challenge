describe(".HeadlineList", () => {

  var headlineList = new HeadlineList();

  it("'headlineList.list' should be an instance of an array", () => {
    assert.isTrue(Array.isArray(headlineList.list));
  });

  it("It should add a headline to the list", () => {
    headlineList.add("Brand New");
    assert.isTrue(headlineList.list.includes("Brand New"));
  });

  it("It should return an array of headlines", () => {
    assert.isEqual(headlineList.returnList()[0], "Brand New");
  });

});