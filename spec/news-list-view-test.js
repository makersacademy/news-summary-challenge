(function(exports){

  function NewsDouble(headline, url, date, body, thumbnail, image, statement){
    this.header = headline
    this.url = url
    this.date = date
    this.body = body
    this.thumbnail = thumbnail
    this.image = image
    this.statement = statement
  }

  function NewsListDouble(){
    this.list = []
  }

  NewsListDouble.prototype = {
    addnews: function(headline, url, date, body, thumbnail, image, statement){
      var newsDouble = new NewsDouble(headline, url, date, body, thumbnail, image, statement);
      this.list.push(newsDouble)
    },

    returnlist: function(){
      return this.list
    }
  }

  function newslisttakesfromNewsListDouble(){
    var newslistDouble = new NewsListDouble();
    var describe = "News-list-view takes from NewsList"
    newslistDouble.addnews("Hello", "https://www.theguardian.com","2017-10-18T13:42:39Z","body","thumbImg","mainImg","<p>More</p>")
    newslistDouble.returnlist();
    var newslistView = new NewsListView(newslistDouble)
    assert.isTrue(describe, newslistView.viewlist, ['Trump'])
  };

  function newslistputsnewsindivs(){
    var newslistDouble = new NewsListDouble();
    var describe = "News-list-view puts data in divs"
    newslistDouble.addnews("Hello", "https://www.theguardian.com","2017-10-18T13:42:39Z","body","thumbImg","mainImg","<p>More</p>")
    newslistDouble.returnlist();
    var newslistView = new NewsListView(newslistDouble)
    assert.isEqual(describe, newslistView.divs(), "<div><h1>Hello</h1><div class=img> thumbImg </div><p>More</p><h6>2017-10-18T13:42:39Z</h6></div>")
  };


newslisttakesfromNewsListDouble();
newslistputsnewsindivs();
})(this);
