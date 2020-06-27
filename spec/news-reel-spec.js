function instantiatesWithEmptyNewsReel() {
  var newsReel = new NewsReel('apiResponse');

  assert.isTrue(newsReel._list.length === 0);
};

function addsNumberOfNewsItemToList() {
  var newsReel = new NewsReel('apiResponse');
  var articles = [testApiResult.response.results[0], testApiResult.response.results[1]];
  newsReel.addNews(articles)

  assert.isTrue(newsReel._list.length === 2);
};

instantiatesWithEmptyNewsReel();
addsNumberOfNewsItemToList();