(function (exports) {

  function NewsStory(id, headline) {
    this.id = id;
    this.headline = headline;
  }

  NewsStory.prototype.returnHeadlineHtml = function () {
    return `<li id="${this.id}" class="headline"><h2>${this.headline}</h2></li>`
  };

  exports.NewsStory = NewsStory;
})(this);
