(function (exports) {

  function HeadlinesView(headlines) {
    this.headlines = headlines;
  }

  HeadlinesView.prototype.htmlString = function() {
    var i;
    var string = "";
    var listLength = this.headlines.list.length;

    for (i = 0; i < listLength; i++) {
      string += "<div>"
      if (this.headlines.list[i].thumbnail != undefined) {
        string += "<img src='";
        string += this.headlines.list[i].thumbnail;
        string += "' alt='article thumbnail'>";
      }
      string += "<h1>";
      string += this.headlines.list[i].section;
      string += " &#x2F; "
      string += this.headlines.list[i].headline;
      string += "</h1></div>"
    }

    return string;
  }

  exports.HeadlinesView = HeadlinesView;
})(this);