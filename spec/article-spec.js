article = new Article("url", "id", "Title", "Thumbnail", "Body")

describe('Article - returns passed ID', function() {
  return assert.isTrue(article.getID() === "id")
});

describe('Article - returns passed URL', function() {
  return assert.isTrue(article.getURL() === "url")
});

describe('Article - returns passed Title', function() {
  return assert.isTrue(article.getTitle() === "Title")
});

describe('Article - returns passed Thumbnail', function() {
  return assert.isTrue(article.getThumbnail() === "Thumbnail")
});

describe('Article - returns passed Body', function() {
  return assert.isTrue(article.getBody() === "Body")
});
