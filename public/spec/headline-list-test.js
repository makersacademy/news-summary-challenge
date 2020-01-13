describe(".HeadlineList", () => {

  var headlineList = new HeadlineList();

  describe("'headlineList.list' should be an instance of an array", () => {
    assert.isTrue(Array.isArray(headlineList.list));
  });

  describe("It should add a headline to the list", () => {
    headlineList.add("Brand New");
    assert.isTrue(headlineList.list.includes("Brand New"));
  });

});