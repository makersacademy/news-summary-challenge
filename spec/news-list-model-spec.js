test.constructorName = "NewsList Model";

var news = {}; // Doubles

(function(){
  test.description = "It should have allNews property";
  var list = new NewsList();
  assert.isTrue( list.allNews );
})();

(function(){
  test.description = "It should add News";
  var list = new NewsList();
  list.addNews(news);
  assert.isTrue( list.allNews[0] === news );
})();