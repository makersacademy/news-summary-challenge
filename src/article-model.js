(function(exports){
  function ArticleModel(title, url, date, thumbnail, summary){
    this._title = title;
    this._url = url;
    this._date = date;
    this._thumbnail = thumbnail;
    this._summary = summary;
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
    },
    displayThumbnail: function(){
      return this._thumbnail;
    },
    displaySummary: function(){
      return this._summary;
    }
  };
  exports.ArticleModel = ArticleModel;
})(this);
