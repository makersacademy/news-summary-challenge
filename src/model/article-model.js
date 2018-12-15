(function (exports) {

  var i = 0;

  function Article(thumbnail, headline, firstParagraph, secondParagraph, thirdParagraph, url) {
    this.thumbnail = thumbnail;
    this.headline = headline;
    this.firstParagraph = firstParagraph;
    this.secondParagraph = secondParagraph;
    this.thirdParagraph = thirdParagraph;
    this.url = url;
    this.id = i;
    i++;
  }
  
  Article.prototype.thumbnail = function() {
    return this.thumbnail;
  }
  
  Article.prototype.headline = function() {
    return this.headline;
  }
    
  Article.prototype.url = function() {
    return this.url;
  }

  exports.Article = Article;
})(this);