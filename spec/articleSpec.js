console.log("Article model tests")
console.log("--------------------")

let myArticle = new Article("myHeadline", "myThumbnailLink", "myUrlID", "mySerialID");

it("Is an instance of the article class", function() {
  expect(true).toEqual(myArticle instanceof Article);
});

it("Correctly returns its headline", function() {
  expect("myHeadline").toEqual(myArticle.getHeadline());
});

it("Correctly returns its thumbnail", function() {
  expect("myThumbnailLink").toEqual(myArticle.getThumbnail());
});

it("Correctly returns its urlID", function() {
  expect("myUrlID").toEqual(myArticle.getUrlID());
});

it("Correctly returns its serialID", function() {
  expect("mySerialID").toEqual(myArticle.getSerialID());
});
