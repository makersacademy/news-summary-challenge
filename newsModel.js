class NewsModel { 

  constructor() {
    this.stories = []
  }
  allStories() {
    return this.stories;
  }

  add(story) {
    this.stories.push(story);
  }
}

module.exports = NewsModel;