(function(exports) {

    function NewsView (news) {
      this.news =  news
    };

    NewsView.prototype.display = function () {
      return [
        "<br>", "<br>",
        "<center>",
        "<h2>",
        "<font face='courier' color='black'>",
        "<div>", "<p>" + this.news.headline + "</p>", "</div>",
        "</h2>",
        "<br>", "<br>",
        "<h3>",
        "<div>", "<p>" + this.news.summary + "</p>", "</div>",
        "</h3>",
        "</font>",
        "<h4>", "<font face='courier' color='black'>",
        "<a href='#news'>", "Back Home", "</a>",
        "</h4>", "</font>",
      ].join('')
    };

    exports.NewsView = NewsView

})(this);
