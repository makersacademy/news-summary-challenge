(function(exports){
  var newslist = new NewsList()

  function NewsListisanArray(){
    var describe = "News List is an Array"
    assert.isTrue(describe, newslist.list, []);
  };
  
  function NewsListcanReturnNewsList(){
    var describe = "News List can return its list"
    newslist.save("Hello", "https://www.theguardian.com","2017-10-18T13:42:39Z","body","thumbImg","mainImg","<p>More</p>")
    assert.isTrue(describe, newslist.return(), 'body')
  };

  function NewsListsavesfromAPI(){
    var describe = "News List can save data"
    assert.isTrue(describe, newslist.save("Hello", "https://www.theguardian.com","2017-10-18T13:42:39Z","body","thumbImg","mainImg","<p>More</p>"), "Hello")
  }

NewsListisanArray();
NewsListcanReturnNewsList();
NewsListsavesfromAPI();
})(this);
