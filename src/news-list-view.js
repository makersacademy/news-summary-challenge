function NewsListView() {
}

NewsListView.prototype.render = function(newsList) {
  return [
    "<h1> <strong> News</strong> Feeds </h1>",
      "<form id='news-form'>",
        "<input type='button' class='news-param' value='Environment'/>",
        "<input type='button' class='news-param' value='Food'/>",
        "<input type='button' class='news-param' value='Music'/>",
        "<input type='button' class='news-param' value='Travel'/>",
        "<input type='button' class='news-param' value='Sport'/>",
        "<input type='button' class='news-param' value='Science'/>",
      "</form>",
    newsList.map(function(news) {
      var thumbnailIfExist = news.thumbnail !== undefined ? "<img src=" + news.thumbnail + " class='newslist_img'>"  : "";
      return  "<div class ='container'>" 
              + thumbnailIfExist
              + "<br>" 
              + "<a href='#news/" + news.id + "' class='list_title'>" + news.title + "</a>" +
              "</div>"
    }).join("")
  ].join("")
};

NewsListView.prototype.getNewsParams = function() {
  return document.getElementsByClassName('news-param')
};