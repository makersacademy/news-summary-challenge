function testCanBeInstantiatedWithTitleURLAndPicture() {
  var article = new Article({title: "Test", url: "www.test.com", thumbnail: "Pic"});
  assert.isTrue("Article can be instantiated with title, url and picture", article.title === "Test");
  assert.isTrue("Article can be instantiated with title, url and picture", article.url === "www.test.com");
  assert.isTrue("Article can be instantiated with title, url and picture", article.thumbnail === "Pic");
}

testCanBeInstantiatedWithTitleURLAndPicture();

function testCanGetTitle() {
  var article = new Article({title: "Test", url: "www.test.com", thumbnail: "Pic"});
  assert.isTrue("Article: can get title", article.getTitle() === "Test");
}

testCanGetTitle();

function testCanGetURL() {
  var article = new Article({title: "Test", url: "www.test.com", thumbnail: "Pic"});
  assert.isTrue("Article: can get url", article.getURL() === "www.test.com");
}

testCanGetURL();

function testCanGetPicture() {
  var article = new Article({title: "Test", url: "www.test.com", thumbnail: "Pic"});
  assert.isTrue("Article: can get url", article.getThumbnail() === "Pic");
}

testCanGetURL();
