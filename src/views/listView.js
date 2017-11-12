'use strict';

;(function (exports) {

  function listItemToHTML(listItem) {
    var title = listItem.webTitle;
    var thumbnail = listItem.fields.thumbnail;
    return [
      '<li>',
        '<article class="article">',
          '<figure>',
            '<img src=' + thumbnail + '>',
          '</figure>',
          '<p>' + title + '</p>',
        '</article>',
      '</li >'
    ].join('');

  }

  exports.listView = {
    listItemToHTML: listItemToHTML
  }

})(this);
