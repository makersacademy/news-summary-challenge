(function (exports) {

  function NewsList(newsModel) {
    this.newsModel = newsModel
    this.newsBox = [];
  }

  NewsList.prototype.createNews = function(headline, summary) {
    var news = new this.newsModel(headline, summary)
    this.newsBox.push(news);
  };

  NewsList.prototype.findById = function(id) {
    return this.newsBox.find(function(news) {
      return news.id == id
    })
  };

  NewsList.prototype.all = function() {
    return this.newsBox
  };

  exports.NewsList = NewsList

})(this);
