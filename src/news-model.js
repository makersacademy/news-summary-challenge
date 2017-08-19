(function(exports){
  function NewsModel(str) {
    this._text = str;
  }

  NewsModel.prototype = {
    text: function(){
      return this._text;
    }
  };

  exports.NewsModel = NewsModel;
})(this);
