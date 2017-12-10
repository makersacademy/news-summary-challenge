(function(exports){

  function News(headline, url, date, body, thumbnail, image, statement){
    this.header = headline
    this.url = url
    this.date = date
    this.body = body
    this.thumbnail = thumbnail
    this.image = image
    this.statement = statement

  };

  News.prototype.return_header = function(){
    return this.header
  };

  News.prototype.return_weburl = function(){
    return this.url
  };

  News.prototype.return_date = function(){
    return this.date
  };

  News.prototype.return_body = function(){
    return this.body
  };

  News.prototype.return_thumbnail = function(){
    return this.thumbnail
  };

  News.prototype.return_image = function(){
    return this.image
  };

  News.prototype.return_statement = function(){
    return this.statement
  };

exports.News = News
})(this);
