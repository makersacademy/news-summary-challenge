class NewsModel {
  constructor() {
    this.story = [];
  };

  addStory(story) {
    this.story = story;
  };

  showStory() {
    return this.story;
  };

};

module.exports = NewsModel;