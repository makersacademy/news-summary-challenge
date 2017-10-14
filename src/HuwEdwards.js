(function(exports) {
  function HuwEdwards() {
    this.list = [];
  }

  HuwEdwards.prototype.headlinesList = function() {
    var headlinesHTML = ["<ul class='list_of_headlines'>"];
    var newsItems = this.list;
    newsItems.forEach(function(newsItem, index) {
      headlinesHTML.push(
        "<a href='#$" + index + "'>" +
        newsItem.returnHeadline() +
        "</a>"
      );
    });
    headlinesHTML.push("</ul>");
    return headlinesHTML.join("");
  };

  HuwEdwards.prototype.newsSummary = function (newsIndex) {
    var newsItem = this.list[newsIndex];
    return "<div class='news_summary'>" + newsItem.returnHeadline() + "</div>";
  };

  exports.HuwEdwards = HuwEdwards;
})(this);
