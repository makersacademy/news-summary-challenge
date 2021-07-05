'use strict';

(function(exports) {
  function HeadlinesView(newsList) {
    this.newsList = newsList;
  }

  HeadlinesView.prototype.displayHeadlines = function() {
    var html = '<ul>'

    this.newsList.list.forEach(article => {
      html += `<li><div><a href="#articles/${article.id}">${article.headline}</a></div></li>`
      // html += `<li><div id='article'><img src=${article.image}><br><a href="#articles/${article.id}">${article.headline}</a></div></li>`
    });

    html += '</ul>'

    return html;
  }

  exports.HeadlinesView = HeadlinesView;
})(this);
