test.constructorName = "NewsList View";

// Doubles
var news = {
  headline: "This is a headline"
};

var newslist = {
  getAllNews: function(){ return [news] }
};

(function(){
  test.description = "It should pass newslist argument to list property when its instanciated";
  var view = new NewsListView( newslist );
  assert.isTrue( view.list === newslist );
})();

(function(){
  test.description = "It should list news with headline in html";
  var view = new NewsListView( newslist );
  assert.isTrue( view.listNews() === "<ul><li><div>This is a headline</div></li></ul>" );
})();