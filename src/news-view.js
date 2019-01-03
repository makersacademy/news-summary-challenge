function NewsView() {
}

NewsView.prototype.render = function(news) {

  console.log(news)  
  return [
    "<div class='newspage'>"
      + "<div> <a href='' class='backbutton'> Back </a> </div>" 
        // + "<button> Go Back </button>" try do back with proper way 
      + "<div class='newscontainer'>" 
        
        + "<h2>" + news.title + "</h2>" 
        + "<img src=" + news.thumbnail + " class='news_img'>"
        + "<span>" + news.date + "</span>" 
        + "<div class='newsbody'>" + news.body + "</div>" +
      "</div>" + 
    "</div>"]
};
