'use strict'

// Individual news story
function News(title, url, imgUrl, summary) {
  this.title = title
  this.url = url
  this.imgUrl = imgUrl
  this.summary = summary
}

// Compilation of all News to render into view from app.js
function NewsBlock() {
  this.allNews = [];
}

NewsBlock.prototype.getNews = function (self = this) {
  var allArticles = new ArticleRequest();
  allArticles.getArticles();
  allArticles.content.forEach(function (element) {
    var title = element.webTitle;
    var url = element.webUrl;
    var imgUrl = element.fields.thumbnail;
    self.allNews.push(new News(title, url, imgUrl));
  });
}
