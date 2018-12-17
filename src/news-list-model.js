
function NewsList() {
  this.news = [];
}

NewsList.prototype.createNews = function(webTitle) {
  // var aNews = new this.newsModel(webTitle)
  this.news.push(webTitle);
};

