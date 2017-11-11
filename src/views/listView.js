'use strict';

;(function (exports) {

  exports.ListView = function (listModel) {

    var list = listModel;
    
    function listItemToHTML(id) {
      var article = list.getArticle(id)
      var title = article.webTitle;
      var thumbnail = article.fields.thumbnail;
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
