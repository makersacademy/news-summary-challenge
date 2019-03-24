(function(exports) {
  function StoryModel(params) {
    this.storyLink;
    this.storyHeadline;
    this.storyImage;
    this.storySummary;

    if (params === undefined) params = {};
    if (params.link !== undefined) {this.storyLink = params.link;}
    if (params.headline !== undefined) {this.storyHeadline = params.headline;}
    if (params.image !== undefined) {this.storyImage = params.image;}
    if (params.summary !== undefined) {this.storySummary = params.summary;}
  }

  StoryModel.prototype.getHeadline = function () {
    return this.storyHeadline;
  },

  exports.StoryModel = StoryModel;
})(this);