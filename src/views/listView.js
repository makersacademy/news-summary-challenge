'use strict';

;(function (exports) {

  exports.ListView = function (listModel) {

    var list = listModel;
    
    function listItemToHTML(id) {
      var item= list.getItem(id)
      var title = item.webTitle;
      var thumbnail = item.fields.thumbnail;
      return [
        '<li>',
          '<article>',
            '<figure>',
              '<img src=' + thumbnail + '>',
            '</figure>',
            '<p>' + title + '</p>',
          '</article>',
        '</li >'
      ].join('');
    }

    return {
      listItemToHTML: listItemToHTML
    }

  };

})(this);
