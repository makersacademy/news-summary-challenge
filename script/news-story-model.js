(function(exports) {

  function NewsStoryModel () {
    this._headline = "Headline 1";
  }

  NewsStoryModel.prototype = {
    getHeadline: function () {
      return this._headline;
    }
  };

  exports.NewsStoryModel = NewsStoryModel;
}(this));
