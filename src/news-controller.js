(function(exports) {
  function NewsController(headlineList) {
    this.headlineList = headlineList;
    this.html = '<ul>'
  };

  // this is now superceded by returnHeadlineHTML but is kept for testing purposes
   NewsController.prototype.getHeadlineHTML = function(text) {
    var element = document.getElementById('news')
    return element.innerHTML = `<p>${text}</p>`;
  };

  NewsController.prototype.returnHeadlineHTML = function() {
    for (var i = 0; i < this.headlineList.headlineListArray.length; i++) {
      var headline = this.headlineList.headlineListArray[i].headline.webTitle;
      var storyLink = this.headlineList.headlineListArray[i].headline.webUrl;
      var image = this.headlineList.headlineListArray[i].headline.fields.thumbnaill;
      this.html = this.html + `<li><div><a href=${storyLink}>${headline}<div><img src=${image}></div></a></div></li><br>`;
    }
    this.html = this.html + '</ul>';
    return this.html;
  };

  exports.NewsController = NewsController;
})(this);