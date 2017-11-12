'use strict';

;(function (exports) {

  function listItemToHTML(listItem) {
    var title = listItem.webTitle;
    var thumbnail = listItem.fields.thumbnail;
    var id = listItem.id;
    return [
        '<a href="#' + id + '">',
          '<article class="article">',
            '<figure>',
              '<img src=' + thumbnail + '>',
            '</figure>',
            '<p>' + title + '</p>',
          '</article>',
        '</a>'
    ].join('');

  }

  exports.listView = {
    listItemToHTML: listItemToHTML
  }

})(this);
