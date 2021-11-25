class newsFeed {
  constructor() {
    this.stories = [];
  }

  addToStories(articles) {
    this.stories.push(articles);
  }
  
  displayAll() {
    return this.stories;
  }
  
  findStory(id) {
    return this.stories[0][id];
  }
}

module.exports = newsFeed;