(function(exports){
  var news = new News("Hello", "https://www.theguardian.com","2017-10-18T13:42:39Z","body","thumbImg","mainImg","<p>More</p>");

  function NewsCanGiveAHeader(){
    var describe = "News gives a header"
    assert.isTrue(describe, news.return_header() === "Hello");
  };

  function NewsCanGiveAWEBurl(){
    var describe = "News gives a weburl"
    assert.isTrue(describe, news.return_weburl() === "https://www.theguardian.com");
  };

  function NewsCanGiveADate(){
    var describe = "News gives a date"
    assert.isTrue(describe, news.return_date() === "2017-10-18T13:42:39Z");
  };

  function NewsCanGiveabody(){
    var describe = "News gives a story's body"
    assert.isTrue(describe, news.return_body() === "body");
  };

  function NewsCanGiveathumbnail(){
    var describe = "News gives a story's thumbnail"
    assert.isTrue(describe, news.return_statement() === "<p>More</p>");
  };

  function NewsCanGiveaStatement(){
    var describe = "News gives a story's Statement"
    assert.isTrue(describe, news.return_statement() === "<p>More</p>");
  };

  function NewsCanGiveaImage(){
    var describe = "News gives a story's Image"
    assert.isTrue(describe, news.return_image() === "mainImg");
  };


NewsCanGiveAHeader();
NewsCanGiveAWEBurl();
NewsCanGiveADate();
NewsCanGiveabody();
NewsCanGiveathumbnail();
NewsCanGiveaImage();
NewsCanGiveaStatement();
})(this);
