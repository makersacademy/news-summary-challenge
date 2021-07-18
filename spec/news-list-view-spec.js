test.constructorName = "NewsList View";

var newslist = {}; // Doubles

(function(){
  test.description = "It should pass newslist argument to list property when its instanciated";
  var view = new NewsListView( newslist );
  assert.isTrue( view.list === newslist );
})();