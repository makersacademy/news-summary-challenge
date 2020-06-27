(function (exports) {

  function NewsStory(newsArticleId, apiResponseElement) {
    this.id = newsArticleId;
    this.headline = apiResponseElement.webTitle;
  }

  NewsStory.prototype.returnHeadlineHtml = function () {
    return `<li id="${this.id}" class="headline"><h2>${this.headline}</h2></li>`
  };

  NewsStory.prototype.returnId = function () {
    return this.id;
  };

  exports.NewsStory = NewsStory;
})(this);
