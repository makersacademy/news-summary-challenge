describe("When 'Brand New' and 'Spanking New' are added to 'headlineList'", () => {

  var headlineList = new HeadlineList();
  // headlineList.add("Brand New");
  // headlineList.add("Spanking New");

  describe("'headlineList.list' should be an instance of an array", () => {
    assert.isTrue(Array.isArray(headlineList.list));
  });

});