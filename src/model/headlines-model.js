(function (exports) {

  function Headlines() {
    this.list = [];
  }

  Headlines.prototype.returnList = function() {
    return this.list;
  }

  Headlines.prototype.addArticle = function(thumbnail, section, headline, byline, firstParagraph, secondParagraph, thirdParagraph, url) {
    this.list.push(new Article(thumbnail, section, headline, byline, firstParagraph, secondParagraph, thirdParagraph, url));
  }

  exports.Headlines = Headlines;
})(this);