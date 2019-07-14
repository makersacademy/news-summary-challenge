(function(exports) {
  function NewsListHTML(newsList) {
    this.newsList = newsList;
  }

  NewsListHTML.prototype.generateHTML = function() {
    var headlineContent = this.newsList.allHeadlines.map(headline => `<li>${headline.text}</li>`);
    return `<ul>${headlineContent}</ul>`;
  };

  exports.NewsListHTML = NewsListHTML;
})(this);