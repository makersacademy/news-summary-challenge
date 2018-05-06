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

function newsListViewTests(){
  var list = new NewsList();
  var news1 = new News("Trump resigns");
  var news2 = new News("No more Brexit");
  list.store(news1.text);
  list.store(news2.text);
  var view = new NewsListView(list)
  console.log(view.display())
  assert.isTrue(view.display() === "<ul><li><div>Trump resigns</div></li><li><div>No more Brexit</div></li></ul>", "returns a string of HTML that represents the news list");
}

newsListViewTests();
