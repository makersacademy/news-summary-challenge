(function(exports){

  function NewsListView(newsList){
    this.viewlist = newsList;
  };

  NewsListView.prototype.divs = function(){
    var news_object = this.viewlist.list
    var iterate_news_object = news_object.map(function(news_object){
    return "<h1>" + news_object.header + "</h1>"+ "<div class=img> " + news_object.thumbnail + " </div>"
          + news_object.statement +  "<h6>" + news_object.date + "</h6>"
    });
      var final =  "<div>" + iterate_news_object + "</div>"
      return final
  };


exports.NewsListView = NewsListView
})(this);
