function ArticleList() {
  this.articles = []
}

ArticleList.prototype = {
  add: function ({title, url, thumbnail}) {
  this.articles.push(new Article({title: title, url: url, thumbnail: thumbnail}))
  },

  getArticles: function() {
    return this.articles;
  }
};
