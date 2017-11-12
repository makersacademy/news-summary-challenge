(function(exports) {

  function NewsStoryModel (headline, summary, imgURL) {
    this._headline = headline;
    this._summary = summary;
    this._imgURL = imgURL;
  }

  NewsStoryModel.prototype = {
    getHeadline: function () {
      return this._headline;
    },
    getSummary: function () {
      return this._summary;
    },
    getImgUrl: function () {
      return this._imgURL;
    }
  };

  exports.NewsStoryModel = NewsStoryModel;
}(this));
