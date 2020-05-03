function newsReel(apiResponse) {
  this.raw_news = apiResponse
  this.newsPieces = []
}

newsReel.prototype.articleParser = function() {
  for (let index = 0; index < this.raw_news.length; index++) {
    const article = new newsItem(this.raw_news[index].fields,index);
    this.newsPieces.push(article);
  }
}