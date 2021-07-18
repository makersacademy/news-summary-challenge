test.constructorName = "NewsList Model";

var news = {}; // Doubles

(function(){ // HAVE
  test.description = "It should have allNews property";
  var list = new NewsList();
  assert.isTrue( list.allNews );
})();

(function(){ // GET
  test.description = "It should get allNews property";
  var list = new NewsList();
  assert.isTrue( list.getAllNews() === list.allNews );
})();

(function(){ // ADD
  test.description = "It should add News to allNews property";
  var list = new NewsList();
  list.addNews(news);
  assert.isTrue( list.allNews[0] === news );
})();