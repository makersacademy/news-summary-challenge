(function (exports) {

  function HeadlinesView(headlines) {
    this.headlines = headlines;
  }

  HeadlinesView.prototype.htmlString = function() {
    var i;
    var string = "";
    var listLength = this.headlines.list.length;

    string += "<main>"
    for (i = 0; i < listLength; i++) {
      string += "<div class='articles-container breaks'><a class='article' href='#article/"
      string += this.headlines.list[i].id
      string += "'>"
      if (this.headlines.list[i].thumbnail != undefined) {
        string += "<div class='thumbnail'><img src='";
        string += this.headlines.list[i].thumbnail;
        string += "' alt='article thumbnail'></div>";
      }
      string += "<p class='headline'><span class='section'>";
      string += this.headlines.list[i].section;
      string += "</span> &#x2F; "
      string += this.headlines.list[i].headline;
      string += "</p></a></div>"
    }
    string += "</main>"

    return string;
  }

  exports.HeadlinesView = HeadlinesView;
})(this);
