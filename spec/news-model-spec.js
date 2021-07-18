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

(function(){
  test.description = "It should get headline";
  var news = new News();
  assert.isTrue( news.getHeadline() === "" );
})();

(function(){
  test.description = "It should get sourceURL";
  var news = new News();
  assert.isTrue( news.getSourceURL() === "" );
})();

(function(){
  test.description = "It should get imageURL";
  var news = new News();
  assert.isTrue( news.getImageURL() === "" );
})();

(function(){
  test.description = "It should get summary";
  var news = new News();
  assert.isTrue( news.getSummary() === "" );
})();

(function(){
  test.description = "It should set summary";
  var news = new News();
  var text = "This is a summary.";
  news.setSummary(text);
  assert.isTrue( news.summary === "This is a summary." );
})();