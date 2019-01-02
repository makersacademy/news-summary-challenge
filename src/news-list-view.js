function NewsListView() {
}

NewsListView.prototype.render = function(newsList) {
  return [
    "<h1> News Summary </h1>",
    newsList.map(function(news) {
      return  "<div class ='container'>" 
              + "<img src=" + news.thumbnail + " class='news_img'>" 
              + "<br>" 
              + "<a href='#news/" + news.id + "' class='title'>" + news.title + "</a>" +
              "</div>"
    }).join("")
  ].join("")
};