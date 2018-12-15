(function (exports) {

  function Headlines() {
    this.list = [];
  }

  Headlines.prototype.returnList = function() {
    return this.list;
  }

  Headlines.prototype.addArticle = function(thumbnail, headline, firstParagraph, secondParagraph, thirdParagraph, url) {
    this.list.push(new Article(thumbnail, headline, firstParagraph, secondParagraph, thirdParagraph, url));
  }

  exports.Headlines = Headlines;
})(this);