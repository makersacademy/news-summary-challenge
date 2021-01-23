// Unit tests for article class
console.log("spec/ArticleSpec.js")
console.log("--------------------------")
let testArticle = new Article("headline", "textBody", "id", "url")

it("it is a member of the Article class", function() {
  expect(testArticle instanceof Article).toEqual(true)
})

it("getHeadline method returns the article headline", function() {
  expect(testArticle.getHeadline()).toEqual("headline")
})

it("getTextBody method returns the article text body", function() {
  expect(testArticle.getTextBody()).toEqual("textBody")
})

it("getId method returns the article id", function() {
  expect(testArticle.getId()).toEqual("id")
})

it("getUrl method returns the article url", function() {
  expect(testArticle.getUrl()).toEqual("url")
})
