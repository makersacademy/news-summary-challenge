function NewsListView() {
}

NewsListView.prototype.render = function(newsList) {
  return [
    "<h1> <strong> News</strong> Feeds </h1>",
    newsList.map(function(news) {
      return  "<div class ='container'>" 
              + "<img src=" + news.thumbnail + " class='newslist_img'>" 
              + "<br>" 
              + "<a href='#news/" + news.id + "' class='list_title'>" + news.title + "</a>" +
              "</div>"
    }).join("")
  ].join("")
};