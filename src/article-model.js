(function(exports){
  function ArticleModel(title, url, date){
    this._title = title;
    this._url = url;
    this._date = date;
  }

  ArticleModel.prototype = {
    displayTitle: function(){
      return this._title;
    },
    displayUrl: function(){
      return this._url;
    },
    displayDate: function(){
      return this._date;
    }
  };
  exports.ArticleModel = ArticleModel;
})(this);
