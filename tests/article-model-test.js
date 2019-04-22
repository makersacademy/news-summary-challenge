function testCanBeInstantiatedWithTitleURLAndPicture() {
  var article = new Article({title: "Test", url: "www.test.com", picture: "Pic"});
  assert.isTrue("Article can be instantiated with title, url and picture", article.title === "Test");
  assert.isTrue("Article can be instantiated with title, url and picture", article.url === "www.test.com");
  assert.isTrue("Article can be instantiated with title, url and picture", article.picture === "Pic");
}

testCanBeInstantiatedWithTitleURLAndPicture();
