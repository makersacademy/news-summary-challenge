function testCreateNews() {
  var news = new News("testing news");
  assert.isTrue(news.text === "testing news", "news created ");
}
testCreateNews();

function testDisplayNews() {
  var news = new News("test2");
  assert.isTrue(news.display() === "test2", "display news works ")
}
testDisplayNews()
