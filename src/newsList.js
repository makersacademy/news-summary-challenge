(function(exports) {
  function NewsList() {
    this.allNews = []
  };

  NewsList.prototype.all = function(){

  return this.allNews

  }

  NewsList.prototype.add = function(newsItem){

    this.allNews.push(newsItem)
  }



  exports.NewsList = NewsList;
  })(this);
