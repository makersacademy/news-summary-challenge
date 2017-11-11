(function(exports) {

  function NewsStoryModel () {
    this._headline = "Headline 1";
    this._summary = "Summary 1";
  }

  NewsStoryModel.prototype = {
    getHeadline: function () {
      return this._headline;
    },
    getSummary: function () {
      return this._summary;
    }
  };

  exports.NewsStoryModel = NewsStoryModel;
}(this));
