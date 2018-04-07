
(function(exports) {
  function NewsListView(newslist) {
    this.core = newslist;
  };

  NewsListView.prototype.show = function () {
  var ultag = ['<ul>'];

    this.core.show().forEach(function(news) {
      ultag.push('<li><div>' + news.text + '</div></li>');
    });

    ultag.push('</ul>');
    return ultag.join('');
  };

  exports.NewsListView = NewsListView
})(this);
