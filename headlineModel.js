class HeadlineModel {
  constructor() {
    this.stories = [];
  }

  getStories() {
    return this.stories;
  }

  addStory(story) {
    this.stories.push(story);
  }
}

module.exports = HeadlineModel;
