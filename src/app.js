function NewsBlock() {
  this.allNews = [];
}

var newsBlock = new NewsBlock();

getNews = function() {
  var allArticles = new ArticleRequest();
  allArticles.getArticles();
  allArticles.content.forEach(function(element) {
    var title = element.webTitle;
    var url = element.webUrl;
    var imgUrl = element.fields.thumbnail;
    newsBlock.allNews.push( new News(title, url, imgUrl));
  });
  console.log(newsBlock.allNews)
}