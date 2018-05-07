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




  it("can store the details of multiple articles in it's storage", function () {
   // arrange
   var newsStub = JSON.parse(stub);


   var list = new List();
   // act
   newsStub.response.results.forEach(result => list.add(new Article(result)));


   // assert
   expects(list.storage.length).toEqual(10);


  })

});
