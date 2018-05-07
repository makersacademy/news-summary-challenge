var SINGLENEWSVIEWMODULE = (function(exports) {
  exports.SingleNewsView = SingleNewsView;
  function SingleNewsView(singleNews) {
    this.singleNews = singleNews;
  };

  SingleNewsView.prototype.HTMLSingleNewsHeadlineRepresentation = function() {
    var picture = this.singleNews.thumbnail;
    var title = this.singleNews.title;
    var htmlString = `<p>` + `<a href='#news/${this.singleNews.id}'>` + title + '</a>' + `</p>` + `<img src=${picture} alt='Image' height='auto' width='300'>`
    return htmlString;
  };

  SingleNewsView.prototype.HTMLSingleNewsSummaryRepresentation = function() {
    var summary = this.singleNews.summary;
    var url = this.singleNews.url;
    var htmlString = `<p>` + summary + `</p>` + `<p>` + `<a href=${url}>` + url + '</a>' + `</p>`;
    return htmlString;
  };


  return exports;
})(this);
