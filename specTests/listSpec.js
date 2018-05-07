describe("List", function () {
  it("has an empty array to store articles in", function () {
   // arrange
     var list = new List();
   // assert
     expects(list.storage.length).toEqual(0);
  })

});
