'use strict';

(function (exports) {

  function View () {

    return {
      addToList: addToList,
    }

    function addToList (article) {
      var list = document.getElementById('populate_articles');
      list.appendChild(createArticleHTML(article));
    };

    function createArticleHTML (article) {
      var htmlElement = document.createElement('li');
      htmlElement.setAttribute('id', article.id );
      htmlElement.appendChild(titleLink(article));
      return htmlElement;
    }

    function titleLink (article) {
      var htmlElement = document.createElement('a');
      var linkText = document.createTextNode(article.title);
      htmlElement.setAttribute('href', article.url);
      htmlElement.appendChild(linkText);
      return htmlElement;
    }

  };
  exports.View = View;
})(this);
