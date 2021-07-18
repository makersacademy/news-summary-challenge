test.constructorName = "News Model";

(function(){
  test.description = "It should have headline property";
  var news = new News();
  assert.isTrue( news.headline === "" );
})();

(function(){
  test.description = "It should have sourceURL property";
  var news = new News();
  assert.isTrue( news.sourceURL === "" );
})();

(function(){
  test.description = "It should have imageURL property";
  var news = new News();
  assert.isTrue( news.imageURL === "" );
})();

(function(){
  test.description = "It should have summary property";
  var news = new News();
  assert.isTrue( news.summary === "" );
})();