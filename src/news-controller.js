(function(exports){

  function NewsController(list){
    this._newsList = list;
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
        var headline = newslist.getById(Number(id)).headline;
        var img = newslist.getById(Number(id)).image;
        var body = newslist.getById(Number(id)).bodyText;
        newsHtmlUpdate(headline, img, body);
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

  function newsHtmlUpdate(singleNews, img, body){
    var news = getField("news")
    news.innerHTML = new NewsView(singleNews, img, body).html()
  };

  exports.NewsController = NewsController;

})(this)
