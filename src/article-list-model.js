function ArticleList() {
  this.articles = []
}

ArticleList.prototype.add = function ({title, url, picture}) {
  this.articles.push(new Article({title: title, url: url, picture: picture}))
};
