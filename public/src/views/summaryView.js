'use strict';

;(function (exports) {

  function articleSummaryToHTML(item) {
    var title = item.webTitle;
    var thumbnail = item.fields.thumbnail;
    var sentences = item.summary.sentences;
    return [
        '<article id="article-summary">',
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

  exports.summaryView = {
    articleSummaryToHTML: articleSummaryToHTML
  };
  
})(this);
