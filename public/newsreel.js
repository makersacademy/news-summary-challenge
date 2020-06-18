function newsReel(newsItemClass,apiResponse) {
  this.raw_news = apiResponse;
  this.newsPieces = [];
  this.itemClass = newsItemClass;
}

newsReel.prototype.articleParser = function() {
  for (let index = 0; index < this.raw_news.length; index++) {
    const article = new this.itemClass(this.raw_news[index].fields,index);
    this.newsPieces.push(article);
  }
}