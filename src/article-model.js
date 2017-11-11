(function(exports)  {

  exports.Article = function(text) {

    var _text = text;

    var getArticleText = function () {
      return _text;
    };

    return {
      getArticleText: getArticleText
    };

  };

})(this);
