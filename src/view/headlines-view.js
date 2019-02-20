(function (exports) {
  function HeadlinesView (headlines) {
    this.headlines = headlines
  }

  HeadlinesView.prototype.htmlString = function () {
    var i
    var string = ''
    var listLength = this.headlines.list.length

    string += '<div id="cabinet">'
    string += '<div id="header">'
    string += '<img src="images/the-guardian-logo.png" alt="The Guardian">'
    string += '<p><span class="section">In Summary</span> &#x2F;</p>'
    string += '</div>'

    string += '<main>'
    for (i = 0; i < listLength; i++) {
      string += "<div class='article-container'><a href='#article/"
      string += this.headlines.list[i].id
      string += "'>"
      if (this.headlines.list[i].thumbnail !== undefined) {
        string += "<div class='thumbnail'><img src='"
        string += this.headlines.list[i].thumbnail
        string += "' alt='article thumbnail'></div>"
      }
      if (this.headlines.list[i].thumbnail === undefined) {
        string += "<div class='thumbnail'></div>"
      }
      string += "<p class='headline'><span class='section'>"
      string += this.headlines.list[i].section
      string += '</span> &#x2F; '
      string += this.headlines.list[i].headline
      string += '</p></a></div>'
    }
    string += '</main>'

    string += '</div>'

    return string
  }

  exports.HeadlinesView = HeadlinesView
})(this)
