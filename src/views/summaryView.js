'use strict';

;(function (exports) {
  
  exports.SummaryView = function () {

    function articleSummaryToHTML(item) {
      var title = item.webTitle;
      var thumbnail = item.fields.thumbnail;
      var sentences = item.summary.sentences;
      return [
          '<article id="articleSummary">',
            '<figure>',
              '<img src=' + thumbnail + '>',
            '</figure>',
            '<h1>' + title + '</h1>',
            sentencesToHTML(sentences),
          '</article>'
      ].join('');
    };

    function sentencesToHTML(sentences) {
      return sentences.map(function (sentence) {
        return '<p>' + sentence + '</p>';
      }).join('');
    };

    return {
      articleSummaryToHTML: articleSummaryToHTML
    };

  };
  
})(this);
