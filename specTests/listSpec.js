describe("List", function () {
  it("has an empty array to store articles in", function() {
   // arrange
     var list = new List();
   // assert
     expects(list.storage.length).toEqual(0);
  })

  it("can add an article to its storage", function() {
    // arrange
    var list = new List();
    var article = "this is a fake news article";
    // act
    list.add(article);
    // assert
    expects(list.storage.includes(article)).toEqual(true);

  })

});
