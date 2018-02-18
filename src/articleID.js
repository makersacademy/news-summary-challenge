(function(exports){

  function ArticleID(){
    this.id
  };

  ArticleID.prototype.init = function(){
    this.id = 0;
  };

  ArticleID.prototype.increment = function(){
    this.id ++;
  };

  ArticleID.prototype.getID = function(){
    return this.id
  };

  exports.ArticleID = ArticleID;
})(this)
