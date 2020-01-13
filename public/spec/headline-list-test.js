describe(".HeadlineList", () => {

  var headlineListTest = new HeadlineList();

  it("'headlineList.list' should be an instance of an array", () => {
    assert.isTrue(Array.isArray(headlineListTest.list));
  });

  it("It should add a headline to the list", () => {
    headlineListTest.add("Brand New", "www.brandnew.co.uk");
    assert.isEqual(headlineListTest.list[0].title, "Brand New");
  });

  it("It should return an array of headlines that includes 'Brand New'", () => {
    assert.isEqual(headlineListTest.returnList()[0].title, "Brand New");
  });

});