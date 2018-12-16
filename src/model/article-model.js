(function (exports) {

  var i = 0;

  function Article(thumbnail, section, headline, byline, firstParagraph, secondParagraph, thirdParagraph, url) {
    this.thumbnail = thumbnail;
    this.section = section;
    this.headline = headline;
    this.byline = byline;
    this.firstParagraph = firstParagraph;
    this.secondParagraph = secondParagraph;
    this.thirdParagraph = thirdParagraph;
    this.url = url;
    this.id = i;
    i++;
  }

  exports.Article = Article;
})(this);