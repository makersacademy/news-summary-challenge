function NewsView() {
}

NewsView.prototype.render = function(news) {

  var thumbnailIfExist = news.thumbnail !== undefined ? "<img src=" + news.thumbnail + " class='news_img'>"  : "";
  return [
    "<div class='newspage'>"
      // + "<div> <a href='' class='backbutton'> Back </a> </div>" /*original way to serve back function, doesnt work after news parameters added*/
      + "<button id='backbutton'> Back </button>"
      + "<button id='topbutton'> Go To Top </button>"
      + "<div class='newscontainer'>"  
        + "<div id='news-main'>"   
          + "<h3>" + news.title + "</h3>" 
          + thumbnailIfExist
          + "<div id='news-date'>" + news.date + "</div>" 
          + "<div> <a href=" + news.url + " class='url'> Original Link </a> </div>" 
        + "</div>"
        + "<div class='newsbody'>" + news.body + "</div>" +
      "</div>" + 
    "</div>"]
};

NewsView.prototype.getBackButton = function() {
  return document.getElementById('backbutton')
};

NewsView.prototype.getTopButton = function() {
  return document.getElementById('topbutton')
};