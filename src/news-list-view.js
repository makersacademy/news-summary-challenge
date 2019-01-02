function NewsListView() {
}

NewsListView.prototype.render = function(newsList) {
  console.log(newsList[0].title)
  return [
    "<h1> News Summary </h1>",
    newsList.map(function(news) {
      return  "<div class ='container'>" 
              + "<img src=" + news.thumbnail + " class='news_img'>" 
              + "<br>" 
              + "<a href='" + news.url + "' class='title'>" + news.title + "</a>" +
              "</div>"
    }).join("")
  ].join("")
};