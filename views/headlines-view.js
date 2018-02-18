(function(exports) {
  function HeadlinesView(headlines) {
    this._headlines = headlines;
  };

  HeadlinesView.prototype.headlines = function () {
    return this._headlines;
  };

  HeadlinesView.prototype.parse = function() {
    string = "<ul>";

    this._headlines.headlines().forEach(function(headline) {
      string += `<li><div><${headline.webTitle}</div></li>`;
    });

    string += "</ul>";
    return string;
  };

  exports.HeadlinesView = HeadlinesView;

})(this);
