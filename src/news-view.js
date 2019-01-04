function NewsView() {
}

NewsView.prototype.render = function(news) {

  console.log(news);
  var thumbnailIfExist = news.thumbnail !== undefined ? "<img src=" + news.thumbnail + " class='news_img'>"  : "";
  return [
    "<div class='newspage'>"
      + "<div> <a href='' class='backbutton'> Back </a> </div>" 
      + "<button id='topbutton'> Go To Top </button>" /*how to pass this to controller*/
      + "<div class='newscontainer'>" 
        
        + "<h2>" + news.title + "</h2>" 
        + thumbnailIfExist
        + "<span>" + news.date + "</span>" 
        + "<div class='newsbody'>" + news.body + "</div>" +
      "</div>" + 
    "</div>"]
};


NewsView.prototype.getTopButton = function() {
  return document.getElementById('topbutton')
};