(function(exports){

  function News(headline, url, date, body, thumbnail, image, statement){
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
      var newsDouble = new News(headline, url, date, body, thumbnail, image, statement);
      this.list.push(newsDouble)
    },

    returnlist: function(){
      return this.list
    }
  };

  function NewsListViewDouble(newslistDouble){
    this.viewlist = newslistDouble
  }

  NewsListViewDouble.prototype = {
    divs: function(){
      return "<div><h1>Hello</h1><div class=img> thumbImg </div><p>More</p><h6>2017-10-18T13:42:39Z</h6></div>"
    }
  };

var newslistDouble = new NewsListDouble();
var newslistViewDouble = new NewsListViewDouble(newslistDouble);
var newsController = new NewsController(newslistViewDouble);

  function NoteControllertakesinNoteListView(){
    var describe = "NoteController takes in NoteListView"
    newslistDouble.addnews("Hello", "https://www.theguardian.com","2017-10-18T13:42:39Z","body","thumbImg","mainImg","<p>More</p>");
    assert.isTrue(describe, newsController.controlist, ["Hello", "https://www.theguardian.com","2017-10-18T13:42:39Z","body","thumbImg","mainImg","<p>More</p>"])
  };

  function NoteControllerchangeshtmlIDS(){
    var describe = "NoteController changes html ids"
    newsController.changesids()
    assert.isEqual(describe,document.getElementById('stories').innerHTML, '<div><h1>Hello</h1><div class="img"> thumbImg </div><p>More</p><h6>2017-10-18T13:42:39Z</h6></div>')
  };

  NoteControllerchangeshtmlIDS();
NoteControllertakesinNoteListView();
})(this);
