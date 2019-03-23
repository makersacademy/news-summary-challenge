(function (exports) {
  function ArticleView (article) {
    this.article = article
  }

  ArticleView.prototype.htmlString = function () {
    var string = ''

    string += '<div id="one">'
    string += '<div id="header">'
    string += '<img src="images/the-guardian-logo.png" alt="The Guardian">'
    string += '</div>'

    string += '<div><p id="main-section"><span class="section">'
    string += this.article.section
    string += '</span> &#x2F;</p>'
    if (this.article.thumbnail !== undefined) {
      string += '<img id="main-picture" src="'
      string += this.article.thumbnail
      string += '" alt="article thumbnail">'
    }
    if (this.article.thumbnail === undefined) {
      string += '<img id="main-picture" src="'
      string += '">'
    }
    string += '<div id="main-headline">'
    string += this.article.headline
    string += '</div><div id="by-line">by '
    string += this.article.byline
    string += '</div><p class="paragraph">'
    string += this.article.firstParagraph
    string += '</p><p class="paragraph">'
    string += this.article.secondParagraph
    string += '</p><p class="paragraph">'
    string += this.article.thirdParagraph
    string += '"</p><a id="onwards" href="'
    string += this.article.url
    string += '">Click here for the full Guardian article</a></div>'

    string += '</div>'

    return string
  }

  exports.ArticleView = ArticleView
})(this)
