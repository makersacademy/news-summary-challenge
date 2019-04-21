(function(exports){
  function ReturnsArticlesList(){
    var list = new NewsArticleList();
    var articleDouble = function(){
      return "article double"
    };

    list.store(articleDouble)

    assert.isTrue("returns the article list", list.show().includes(articleDouble));
  }

  ReturnsArticlesList();
})(this);
