(function(exports)  {

  exports.ArticleList = function() {

    var _list = [];

    var getArticleList = function () {
      return _list;
    };

    return {

      _list: _list,
      getArticleList: getArticleList

    };

  };

})(this);
