'use strict';

(function (exports) {

  function View (rugbyArticles) {

    console.log(rugbyArticles);

    rugbyArticles.forEach(function(article, index) {
      console.log( article.id +1 );
      console.log( article.title );
      console.log( article.url );
    });
  };

  exports.View = View;
})(this);
