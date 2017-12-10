(function(exports){

  function NewsList(){
    this.list = []
  };

  NewsList.prototype.save = function(headline, url, date, body, thumbnail, image, statement){
    var news = new News(headline, url, date, body, thumbnail, image, statement)
    this.list.push(news)
    return this.list
  };

  NewsList.prototype.return = function(){
    return this.list
  };

exports.NewsList = NewsList
})(this);
