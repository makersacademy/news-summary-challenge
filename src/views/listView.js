'use strict';

(function (exports) {

  exports.ListView = function (listModel) {

    var list = listModel;
    
    function renderListItem(id) {
      var title = list.getArticle(1).webTitle;
      return '<li><article>' + title + '</article></li>'
    }

    return {
      renderListItem: renderListItem
    }
  };

})(this);
