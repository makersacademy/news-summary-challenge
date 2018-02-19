(function(exports) {
  function HeadlinesView(headlines) {
    this._headlines = headlines;
  };

  HeadlinesView.prototype.headlines = function () {
    return this._headlines;
  };

  HeadlinesView.prototype.parse = function() {
    var string = '<ul style="list-style: none;">';

    this._headlines.headlines().forEach(function(headline) {
      string += `<h3><li><div><a href='#summary/${headline.id}'>`;
      string += `${headline.webTitle}</a><br>`
      string += `<img src="${headline.fields.thumbnail}">`
      string += `</div></li></h3>`;
    });

    string += "</ul>";
    return string;
  };

  exports.HeadlinesView = HeadlinesView;

})(this);
