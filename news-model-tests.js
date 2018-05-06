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

function testCreateNewsList() {
  var newslist = new NewsList();
  assert.isTrue(Array.isArray(newslist.items), "created news list");
};
testCreateNewsList();

function testStoreNews() {
  var newslist = new NewsList()
  newslist.store("News of the day")
  console.log(newslist.items)
  assert.isTrue(newslist.items[0] === "News of the day", "news is stored in list")
};

testStoreNews();
