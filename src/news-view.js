function NewsView() {
}

NewsView.prototype.render = function(news) {

  console.log(news)  
  return [
    "<div class='newspage'>"
      + "<div> <a href='' class='backbutton'> Back </a> </div>" 
        // + "<button id='backbutt'> Go Back </button>" /*how to pass this to controller*/
      + "<div class='newscontainer'>" 
        
        + "<h2>" + news.title + "</h2>" 
        + "<img src=" + news.thumbnail + " class='news_img'>"
        + "<span>" + news.date + "</span>" 
        + "<div class='newsbody'>" + news.body + "</div>" +
      "</div>" + 
    "</div>"]
};


// NewsView.prototype.getBackButton = function() {
//   return document.getElementById('backbutt')
// };