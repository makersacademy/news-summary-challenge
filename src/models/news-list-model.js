(function(exports){

  function NewsList(){
    this.allNews = [];
  }

  NewsList.prototype.addNews = function(news){
    this.allNews.push(news)
  };

  exports.NewsList = NewsList;

})(this);