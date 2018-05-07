(function(exports){

  function NewsController(list = new NewsList()){
    this._newsList = list;
    this._newsList.add("testingheadline1", "http://www.pet365.co.uk/blog/wp-content/uploads/Border-Collie_71279674.jpg")
    this._newsList.add("testingheadline2", "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg")
  }

  NewsController.prototype = {

    getHTML: function(){
      listHtmlUpdate(this._newsList)
    },

    urlChangeDisplayNews: function(){
      var newslist = this._newsList;
      window.addEventListener("hashchange", function(event){
        event.preventDefault();
        var id = getNewsID(window.location);
        var news = newslist.getNewsById(Number(id));
        var img = newslist.getImageById(Number(id));
        newsHtmlUpdate(news, img);
      })
    }

  };

  function getField(field){
    return document.getElementById(field)
  };

  function getNewsID(location){
    return location.hash.split("#")[1];
  };

  function listHtmlUpdate(headlines){
    var newslist = getField("newslist")
    newslist.innerHTML = new NewsListView(headlines).html()
  };

  function newsHtmlUpdate(singleNews, img){
    var news = getField("news")
    news.innerHTML = new NewsView(singleNews, img).html()
  };

  exports.NewsController = NewsController;

})(this)
