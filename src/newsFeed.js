class newsFeed {
  constructor() {
    this.stories = [];
  }

  addStory(story) {
    this.stories.push(story);
  }
  
  displayAll() {
    return this.stories;
  }
  
  findStory(id) {
    return this.stories[id];
  }
}

module.exports = newsFeed;